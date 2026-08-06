<script lang="ts">
	// Throwaway harness: uji agentStore + transcriptStore runtime di browser.
	// Hapus file ini setelah integrasi selesai.
	import {
		agents,
		agentList,
		activeAgentId,
		activeAgent,
		addAgent,
		updateAgent,
		assignAgent,
		clearActiveAgent,
		resetAgents
	} from '$lib/stores/agent/agentStore';

	import {
		transcriptsStore,
		chatTranscript,
		agentTranscript,
		addMessage,
		getHistoryByAgent,
		clearTranscript,
		clearPersistedTranscripts
	} from '$lib/stores/transcript/transcriptStore';

	import {
		busHistory,
		calls,
		parseCalls,
		resolveAgentId,
		processMessage,
		watchTranscript,
		generateAgentResponse,
		on,
		clearBus
	} from '$lib/stores/orchestration/orchestration';

	import { get } from 'svelte/store';

	let log: string[] = [];

	// seed IDEMPOTENT: hanya tambah agen kalau belum ada (amankah persistensi/reload)
	function seed() {
		// pakai $agents secara reaktif — jika sudah ada a1,a2,a3 -> skip
		addAgent({ id: 'a1', name: 'Hermes', systemPrompt: 'assistant utama', model: 'gemma4:e4b' });
		addAgent({ id: 'a2', name: 'Planner', systemPrompt: 'perencana', model: 'hermes3:latest' });
		addAgent({ id: 'a3', name: 'Critic', systemPrompt: 'penyunting', model: 'gemma4:e4b' });
	}

	// reactive: seed 1x saat agent belum lengkap, lalu berhenti
	$: if ($agentList.length === 0) seed();

	$: summary = {
		total: $agentList.length,
		names: $agentList.map((a) => a.name).join(', '),
		active: $activeAgent ? $activeAgent.name : null,
		activeId: $activeAgentId
	};

	// transcript: demo state awal — HANYA bila chat ini belum punya pesan (idempoten utk reload)
	const CHAT = 'chat-demo-1';
	$: if ($agentList.length === 3 && getHistoryByAgent(CHAT, 'a2').length === 0) {
		addMessage(CHAT, 'a2', { role: 'user', content: 'Rencanakan fitur X' });
		addMessage(CHAT, 'a2', { role: 'assistant', content: 'Rencana: 1) API 2) UI' });
		addMessage(CHAT, 'a3', { role: 'assistant', content: 'Kritik: API perlu auth' });
		addMessage(CHAT, 'a1', { role: 'assistant', content: 'Final: API + auth + UI' });
	}

	// derived store func -> subscribe SEKALI di top-level (bukan dalam $: block,
// karena reactive block bikin derived baru tiap run & leak memory)
	let chronoMsgs = [];
	let plannerMsgsList = [];
	let criticMsgsList = [];
	chatTranscript(CHAT).subscribe((v) => (chronoMsgs = v));
	agentTranscript(CHAT, 'a2').subscribe((v) => (plannerMsgsList = v));
	agentTranscript(CHAT, 'a3').subscribe((v) => (criticMsgsList = v));

	// ===== Orchestration test =====
	// start monitor pada chat demo — deteksi [CALL: nama] di pesan baru
	watchTranscript(CHAT);

	// reactive: render jumlah calls & bus
	let callCount = 0;
	calls.subscribe((c) => (callCount = c.length));
	let busCount = 0;
	busHistory.subscribe((b) => (busCount = b.length));

	// ===== Generate agent response via Ollama (Fase 3, item 3) =====
	let genStatus = 'idle'; // idle | running | done | error
	let genResult = '';
	let genLog: string[] = [];

	const generateFor = async (agentId: string, prompt: string) => {
		const chatId = CHAT;
		// catat prompt user ke transkrip agent tsb (biar ada konteks)
		addMessage(chatId, agentId, { role: 'user', content: prompt });
		genStatus = 'running';
		genLog = [...genLog, `[${agentId}] generate: ${prompt}`];
		const agent = $agents[agentId];
		const history = getHistoryByAgent(chatId, agentId).map((m) => ({
			role: m.role === 'system' ? 'system' : m.role,
			content: m.content
		}));
		try {
			const text = await generateAgentResponse({
				chatId,
				agentId,
				model: agent.model,
				systemPrompt: agent.systemPrompt,
				history
			});
			genResult = text;
			genStatus = 'done';
			genLog = [...genLog, `[${agentId}] result: ${text.slice(0, 120)}...`];
		} catch (e) {
			genStatus = 'error';
			genLog = [...genLog, `[${agentId}] ERROR: ${String(e)}`];
		}
	};

	// auto-trigger: saat pesan dari agent mengandung [CALL: x], generate juga
	// (simulasi Leader-Worker: Hermes mendelegasikan ke Planner/Critic)
	const handleGenerated = (p: Record<string, unknown>) => {
		const agentId = p.agentId as string;
		const chatId = p.chatId as string;
		// bila hasilnya memanggil agen lain, generate agen itu juga (1 level)
		const targetIds = parseCalls(genResult);
		if (targetIds.length > 0) {
			for (const t of targetIds) {
				const tid = resolveAgentId(t);
				if (tid && tid !== agentId) {
					const prompt = `(auto dari ${agentId}) ${genResult}`;
					genLog = [...genLog, `[auto] ${agentId} -> ${tid}: ${prompt.slice(0, 80)}...`];
					addMessage(chatId, tid, { role: 'user', content: prompt });
					const tagent = $agents[tid];
					const thistory = getHistoryByAgent(chatId, tid).map((m) => ({
						role: m.role,
						content: m.content
					}));
					generateAgentResponse({
						chatId,
						agentId: tid,
						model: tagent.model,
						systemPrompt: tagent.systemPrompt,
						history: thistory
					}).then((t) => {
						genLog = [...genLog, `[${tid}] result: ${t.slice(0, 120)}...`];
					});
				}
			}
		}
	};
	on('agent:generated', handleGenerated);
</script>

<h1>Agent Store Harness</h1>

<p>
	<strong>agents:</strong> {$agents ? Object.entries($agents).length : 0} agen
</p>
<ul>
	{#each $agentList as a (a.id)}
		<li>{a.id} — {a.name} ({a.model}) [active: {a.active ? '✓' : '✗'}]</li>
	{/each}
</ul>

<p><strong>activeAgentId:</strong> {$activeAgentId ?? 'null'}</p>
<p><strong>activeAgent:</strong> {$activeAgent ? $activeAgent.name : 'null'}</p>

<button on:click={() => assignAgent('a2')}>assign a2</button>
<button on:click={() => clearActiveAgent()}>clear</button>
<button on:click={() => resetAgents()}>reset</button>
<button on:click={() => updateAgent('a3', { systemPrompt: 'penyunting baru' })}>update a3 prompt</button>

<hr />
<h2>Transcript</h2>
<p><strong>Kronologis (semua agen, urut ts):</strong></p>
<ul>
	{#each chronoMsgs as m (m.id)}
		<li>
			[{m.agentId}]{m.role} <em>{new Date(m.ts).toLocaleTimeString()}</em> — {m.content}
		</li>
	{/each}
</ul>

<p><strong>Planner (a2) history — {plannerMsgsList.length} msg:</strong></p>
<ul>
	{#each plannerMsgsList as m (m.id)}
		<li>[{m.role}] {m.content}</li>
	{/each}
</ul>

<p><strong>Critic (a3) history — {criticMsgsList.length} msg:</strong></p>
<ul>
	{#each criticMsgsList as m (m.id)}
		<li>[{m.role}] {m.content}</li>
	{/each}
</ul>

<p><strong>getHistoryByAgent (sync, sinkron) — {getHistoryByAgent(CHAT, 'a2').length} msg:</strong>
	{getHistoryByAgent(CHAT, 'a2')
		.map((m) => `${m.role}:${m.content}`)
		.join(' | ')}
</p>

<button on:click={() => addMessage(CHAT, 'a2', { role: 'assistant', content: 'Rencana v2' })}>
	add planner msg
</button>
<button on:click={() => clearTranscript(CHAT)}>clear chat transcript</button>
<button on:click={() => clearPersistedTranscripts()}>clear ALL persisted transcripts</button>
<button on:click={() => { localStorage.clear(); location.reload(); }}>nuke localStorage + reload</button>

<hr />
<h2>Orchestration</h2>
<p><strong>parseCalls('[CALL: Planner]') =</strong> {JSON.stringify(parseCalls('[CALL: Planner]'))}</p>
<p><strong>parseCalls('hai [CALL: critic] dan [CALL: Hermes]') =</strong>
	{JSON.stringify(parseCalls('hai [CALL: critic] dan [CALL: Hermes]'))}</p>
<p><strong>resolveAgentId('planner') =</strong> {resolveAgentId('planner') ?? 'null'}</p>
<p><strong>calls (log panggilan) — {callCount} event:</strong></p>
<ul>
	{#each $calls as c (c.ts + c.targetAgentId + c.chatId)}
		<li>
			{new Date(c.ts).toLocaleTimeString()} — {c.fromAgentId ?? 'user'} → {c.targetAgentId}
			(chat: {c.chatId})
		</li>
	{/each}
</ul>
<p><strong>bus events — {busCount}:</strong> {$busHistory.map((e) => e.type).join(', ') || 'none'}</p>

<button on:click={() => addMessage(CHAT, 'a1', { role: 'assistant', content: 'Analisis: butuh [CALL: critic] dan [CALL: Planner]' })}>
	send CALL from Hermes
</button>
<button on:click={() => addMessage(CHAT, 'user', { role: 'user', content: 'tolong [CALL: planner] review ini' })}>
	send CALL from user
</button>
<button on:click={() => clearBus()}>clear bus/calls</button>

<hr />
<h2>Generate via Ollama (Fase 3)</h2>
<p><strong>status:</strong> {genStatus}</p>
{#if genResult}
	<p><strong>hasil:</strong> <em>{genResult}</em></p>
{/if}
<ul>
	{#each genLog as l, i (i)}
		<li>{l}</li>
	{/each}
</ul>
<p>Trigger agent & auto-delegasi:</p>
<button on:click={() => generateFor('a1', 'Rencanakan langkah & [CALL: planner] dan [CALL: critic] untuk artikel kecil')}>
	Hermes -> generate & CALL planner+critic
</button>
<button on:click={() => generateFor('a2', 'Buat rencana 3 langkah [CALL: critic] review')}>
	Planner -> generate & CALL critic
</button>
<button on:click={() => generateFor('a3', 'Review kualitas [CALL: planner]')}>
	Critic -> generate & CALL planner
</button>

<pre>{JSON.stringify(summary)}</pre>