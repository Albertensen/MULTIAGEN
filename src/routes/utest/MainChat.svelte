<script lang="ts">
	// MainChat.svelte — Discord-style main chat (Fase 4 item 18-19)
	// Render event orkestrasi (delegation/feedback/done) sebagai pesan casual
	// + typing indicator real-time dari status thinking/busy.
	import { on, triggerMention } from '$lib/stores/orchestration/orchestration';
	import { agentList } from '$lib/stores/agent/agentStore';
	import { get } from 'svelte/store';

	type ChatMsg = {
		id: number;
		kind: 'assign' | 'done' | 'feedback' | 'error' | 'system' | 'user';
		author: string;
		text: string;
		ts: number;
	};

	let msgs: ChatMsg[] = [];
	let typing = new Set<string>(); // agent id yang sedang "mengetik"
	let seq = 0;
	let draft = '';

	const push = (kind: ChatMsg['kind'], author: string, text: string) => {
		msgs = [...msgs, { id: ++seq, kind, author, text, ts: Date.now() }];
	};

	// kirim pesan user: render + trigger mention @agent
	const send = () => {
		const text = draft.trim();
		if (!text) return;
		push('user', 'User', text);
		draft = '';
		triggerMention({ chatId: 'chat-demo-1', text });
	};

	// ---- template casual (hardcode, hemat token LLM) ----
	const agentName = (id: string) => {
		const a = get(agentList).find((x) => x.id === id);
		return a?.name ?? id;
	};

	const tplAssign = (workerName: string, task: string) =>
		`Alright! 🚀 Tolong handle bagian ini ya @${workerName}! 😎\n\n📝 **Tugas:** ${task}`;
	const tplDone = (workerName: string, hasil: string) =>
		`Beres bosku! ✨ Udah kelar nih, silakan dicek. 💻\n\n📄 **Hasil:** ${hasil}`;
	const tplFeedback = (workerName: string, pesan: string) =>
		`Wait, butuh pencerahan dikit nih 🤔\n\n❓ **Pesan:** ${pesan}`;
	const tplError = (err: string) => `Yaah error nih 😅\n\n⚠️ **Error:** ${err}`;

	// ---- event listeners ----
	on('orchestration:delegation', (p) => {
		const workerNames = (p.workerIds as string[]).map(agentName).join(', ');
		push('system', 'System', `📢 Delegasi ke ${workerNames} (task: ${String(p.task ?? '').slice(0, 80)})`);
	});
	on('orchestration:mention', (p) => {
		// user/leader mention @agent → agent on-duty
		push('system', 'System', `📣 ${agentName(p.agentId as string)} dipanggil! Siap gas! 🔥`);
	});
	on('orchestration:worker-started', (p) => {
		typing.add(p.workerId as string);
		typing = new Set(typing);
		push('assign', agentName(p.workerId as string), tplAssign(agentName(p.workerId as string), String(p.task ?? '')));
	});
	on('orchestration:worker-done', (p) => {
		typing.delete(p.workerId as string);
		typing = new Set(typing);
		push('done', agentName(p.workerId as string), tplDone(agentName(p.workerId as string), String(p.text ?? '').slice(0, 200)));
	});
	on('orchestration:worker-feedback', (p) => {
		typing.add(p.workerId as string);
		typing = new Set(typing);
		push('feedback', agentName(p.workerId as string), tplFeedback(agentName(p.workerId as string), String(p.question ?? '')));
	});
	on('orchestration:delegation-error', (p) => {
		push('error', 'System', tplError(String(p.error ?? 'unknown')));
	});
	on('orchestration:delegation-done', (p) => {
		typing.clear();
		typing = new Set();
		push('done', agentName(p.leaderId as string), tplDone(agentName(p.leaderId as string), String(p.finalText ?? '').slice(0, 200)));
	});
</script>

<div class="main-chat">
	<div class="chat-scroll">
		{#if msgs.length === 0}
			<p class="empty">Belum ada aktivitas. Coba trigger delegasi di bawah! 👇</p>
		{/if}
		{#each msgs as m (m.id)}
			<div class="msg {m.kind}">
				<span class="msg-avatar">{m.author.slice(0, 1).toUpperCase()}</span>
				<div class="msg-body">
					<span class="msg-author">{m.author} <span class="msg-time">{new Date(m.ts).toLocaleTimeString()}</span></span>
					<span class="msg-text">{@html m.text.replace(/\n/g, '<br/>')}</span>
				</div>
			</div>
		{/each}
	</div>

	<div class="typing-row">
		{#each [...typing] as tid (tid)}
			<span class="typing-chip">{agentName(tid)} is typing... 💬</span>
		{/each}
	</div>

	<input
		class="chat-input"
		placeholder="Tulis pesan atau @mention agent..."
		bind:value={draft}
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				send();
			}
		}}
	/>
</div>

<style>
	.main-chat {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: #313338;
		color: #dbdee1;
		border-radius: 8px;
		overflow: hidden;
	}
	.chat-scroll {
		flex: 1;
		overflow-y: auto;
		padding: 12px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.empty {
		color: #949ba4;
		font-size: 13px;
		text-align: center;
		margin-top: 40px;
	}
	.msg {
		display: flex;
		gap: 8px;
		align-items: flex-start;
	}
	.msg-avatar {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #5865f2;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		flex-shrink: 0;
	}
	.msg-body {
		display: flex;
		flex-direction: column;
		background: #2b2d31;
		border-radius: 8px;
		padding: 6px 10px;
		max-width: 85%;
	}
	.msg-author {
		font-size: 12px;
		font-weight: bold;
		color: #5865f2;
	}
	.msg-time {
		font-weight: normal;
		color: #949ba4;
		font-size: 10px;
		margin-left: 6px;
	}
	.msg-text {
		font-size: 13px;
		white-space: pre-wrap;
	}
	.msg.error .msg-body {
		background: #3a2a2a;
	}
	.msg.error .msg-author {
		color: #f23f43;
	}
	/* pesan User: rata kanan, warna beda (Discord-style) */
	.msg.user {
		flex-direction: row-reverse;
	}
	.msg.user .msg-body {
		background: #5865f2;
	}
	.msg.user .msg-author {
		color: #fff;
	}
	.msg.user .msg-avatar {
		background: #23a55a;
	}
	.typing-row {
		padding: 0 12px 6px;
		min-height: 22px;
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
	}
	.typing-chip {
		font-size: 12px;
		color: #b5bac1;
		font-style: italic;
		animation: blink 1.2s infinite;
	}
	@keyframes blink {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
	}
	.chat-input {
		margin: 0 12px 12px;
		padding: 10px 12px;
		border: none;
		border-radius: 8px;
		background: #383a40;
		color: #dbdee1;
		font-size: 13px;
	}
</style>
