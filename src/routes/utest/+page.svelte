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

<pre>{JSON.stringify(summary)}</pre>