<script lang="ts">
	// LeaderChatPanel.svelte — Ruang Meeting bersama Leader (# 🧠 [leader])
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { agentList } from '$lib/stores/agent/agentStore';
	import { activeChannel, activeLeaderId } from '$lib/stores/workspace/workspaceStore';
	import { triggerMention } from '$lib/stores/orchestration/orchestration';
	import { on } from '$lib/stores/orchestration/orchestration';
	import { setAgentStatus } from '$lib/stores/agent/agentStore';
	import { leaderChatHistory, pushLeaderMsg } from '$lib/stores/chatStore';

	$: leaderId = $activeLeaderId ?? ($activeChannel.startsWith('leader:') ? $activeChannel.slice(7) : null);
	$: leader = $agentList.find((a) => a.id === leaderId) ?? null;
	$: leaderName = leader?.name ?? 'Leader';

	type ChatMsg = { id: number; kind: 'user' | 'leader' | 'system'; author: string; text: string; ts: number };
	// history persist per leader (store global — tidak hilang saat pindah channel)
	let msgs: ChatMsg[] = [];
	$: unsubHistory = leaderChatHistory(leaderId ?? '__none__').subscribe((h) => (msgs = h));
	let draft = '';
	let typing = false;

	// dummy pembuka dari Leader — sekali via onMount (hindari loop reactive)
	onMount(() => {
		if (leaderId && get(leaderChatHistory(leaderId)).length === 0) {
			pushLeaderMsg(leaderId, { kind: 'leader', author: leaderName, text: `Halo, saya ${leaderName}. Apa master plan yang ingin kita eksekusi hari ini?` });
		}
	});

	const agentName = (id: string) => get(agentList).find((x) => x.id === id)?.name ?? id;

	const push = (kind: ChatMsg['kind'], author: string, text: string) => {
		if (!leaderId) return;
		pushLeaderMsg(leaderId, { kind, author, text });
	};

	// tulis ke stream log (localStorage) — key stream:<leaderId>
	const STREAM_KEY = 'multiagent.streamlog.v1';
	const pushStream = (kind: ChatMsg['kind'], author: string, text: string) => {
		if (!leaderId || typeof localStorage === 'undefined') return;
		const key = `stream:${leaderId}`;
		const raw = localStorage.getItem(STREAM_KEY);
		let all: Record<string, ChatMsg[]> = {};
		try { all = raw ? JSON.parse(raw) : {}; } catch { /* ignore */ }
		const arr = all[key] ?? [];
		arr.push({ id: arr.length + 1, kind, author, text, ts: Date.now() });
		all[key] = arr.slice(-200);
		localStorage.setItem(STREAM_KEY, JSON.stringify(all));
	};

	const send = async () => {
		const text = draft.trim();
		if (!text) return;
		push('user', 'User', text);
		draft = '';
		typing = true;
		// TUGAS 2b: Leader langsung jadi thinking di roster
		if (leaderId) setAgentStatus(leaderId, 'thinking');
		try {
			await triggerMention({ chatId: 'chat-demo-1', text: `@${leaderName} ${text}` });
		} finally {
			typing = false;
			if (leaderId) setAgentStatus(leaderId, 'online');
		}
	};

	// pantau delegasi leader di ruang ini
	on('orchestration:delegation', (p) => {
		if (p.leaderId === leaderId) {
			push('system', 'System', `📢 ${agentName(String(p.leaderId))} mendelegasikan ke ${(p.workerIds as string[]).map(agentName).join(', ')}`);
			pushStream('system', 'System', `📢 ${agentName(String(p.leaderId))} mendelegasikan ke ${(p.workerIds as string[]).map(agentName).join(', ')}`);
		}
	});
	// balasan Leader (rencana): kalau berisi [CALL:] → HANYA ke stream (log orkestrasi),
	// ruang brainstorming tetap bersih; kalau ngobrol biasa → masuk history chat
	on('orchestration:leader-plan', (p) => {
		if (p.leaderId === leaderId) {
			const plan = String(p.plan ?? '');
			pushStream('leader', agentName(String(p.leaderId)), plan);
			if (!/\[CALL:/i.test(plan)) {
				push('leader', agentName(String(p.leaderId)), plan);
			}
		}
	});
	// setelah worker selesai + artifact tersimpan → konfirmasi bersih ke ruang meeting
	on('orchestration:delegation-done', (p) => {
		if (p.leaderId === leaderId) {
			pushStream('system', 'System', `📄 Artifact disimpan — delegasi ${String(p.task ?? '').slice(0, 60)}`);
			push('leader', agentName(String(p.leaderId)), `Tugas telah dipecah dan dieksekusi oleh tim. Hasil akhirnya telah saya simpan di direktori file. Ada hal lain yang ingin didiskusikan?`);
		}
	});
	on('orchestration:worker-started', (p) => {
		if (p.leaderId === leaderId) {
			pushStream('assign', agentName(String(p.workerId)), `🚀 Menjalankan tugas...`);
		}
	});
	on('orchestration:worker-done', (p) => {
		if (p.leaderId === leaderId) {
			pushStream('done', agentName(String(p.workerId)), `✅ Selesai — ${String(p.result ?? '').slice(0, 120)}`);
		}
	});
	on('orchestration:leader-thinking', (p) => {
		if (p.leaderId === leaderId) {
			pushStream('system', 'System', `🧠 ${agentName(String(p.leaderId))} sedang merumuskan Master Plan...`);
		}
	});
</script>

<div class="lc-panel">
	<header class="lc-header">
		<span class="lc-hash">🧠</span>
		<span class="lc-name">{leaderName}</span>
		<span class="lc-topic">— Brainstorming & Planning</span>
	</header>

	<div class="lc-body">
		{#each msgs as m (m.id)}
			<div class="lc-msg {m.kind}">
				<span class="lc-author">{m.author}</span>
				<span class="lc-time">{new Date(m.ts).toLocaleTimeString()}</span>
				<div class="lc-text">{m.text}</div>
			</div>
		{/each}
		{#if typing}
			<div class="lc-msg system">
				<span class="lc-author">{leaderName}</span>
				<span class="lc-time">…</span>
				<div class="lc-text">mengetik…</div>
			</div>
		{/if}
	</div>

	<div class="lc-inputbar">
		<textarea
			class="lc-input"
			bind:value={draft}
			placeholder="Tulis ide / master plan untuk {leaderName}..."
			on:keydown={(e) => {
				if (e.key === 'Enter' && !e.shiftKey) {
					e.preventDefault();
					send();
				}
			}}
		></textarea>
		<button class="lc-send" on:click={send}>➤</button>
	</div>
</div>

<style>
	.lc-panel {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-width: 0;
		height: 100%;
		background: #313338;
	}
	.lc-header {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 12px 16px;
		border-bottom: 1px solid #26282c;
		background: #313338;
	}
	.lc-hash {
		font-size: 18px;
	}
	.lc-name {
		font-weight: 700;
		color: #f2f3f5;
	}
	.lc-topic {
		font-size: 13px;
		color: #949ba4;
	}
	.lc-body {
		flex: 1;
		overflow-y: auto;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.lc-msg {
		max-width: 75%;
		padding: 8px 12px;
		border-radius: 8px;
		background: #3f4147;
		align-self: flex-start;
	}
	.lc-msg.user {
		background: #404eed;
		align-self: flex-end;
	}
	.lc-msg.system {
		background: #2b2d31;
		color: #949ba4;
		font-size: 12px;
		align-self: center;
		max-width: 90%;
	}
	.lc-author {
		font-weight: 700;
		font-size: 13px;
		color: #f2f3f5;
	}
	.lc-msg.user .lc-author {
		color: #fff;
	}
	.lc-time {
		font-size: 10px;
		color: #949ba4;
		margin-left: 6px;
	}
	.lc-text {
		margin-top: 2px;
		font-size: 14px;
		white-space: pre-wrap;
		word-break: break-word;
	}
	.lc-inputbar {
		display: flex;
		gap: 8px;
		padding: 12px 16px;
		border-top: 1px solid #26282c;
		background: #313338;
	}
	.lc-input {
		flex: 1;
		resize: none;
		height: 44px;
		border-radius: 8px;
		border: none;
		background: #383a40;
		color: #f2f3f5;
		padding: 10px 12px;
		font-size: 14px;
		font-family: inherit;
	}
	.lc-input::placeholder {
		color: #6d6f78;
	}
	.lc-send {
		width: 44px;
		height: 44px;
		border-radius: 8px;
		border: none;
		background: #404eed;
		color: #fff;
		font-size: 16px;
		cursor: pointer;
	}
	.lc-send:hover {
		background: #4752c4;
	}
</style>
