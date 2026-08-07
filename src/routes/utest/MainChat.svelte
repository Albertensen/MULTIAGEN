<script lang="ts">
	// MainChat.svelte — Discord-style main chat (Fase 4 final)
	// Markdown+code render, avatar, ping effect, error log drawer.
	import { on, triggerMention } from '$lib/stores/orchestration/orchestration';
	import { agentList } from '$lib/stores/agent/agentStore';
	import { activeChannel } from '$lib/stores/workspace/workspaceStore';
	import { get } from 'svelte/store';
	import hljs from 'highlight.js';

	// render: code block ```lang → highlight, **bold**, newline → <br/>
	const md = (text: string) =>
		text
			.replace(/```(\w*)\s*\n?([\s\S]*?)```/g, (_, lang: string, code: string) => {
				const l = lang && hljs.getLanguage(lang) ? lang : '';
				const val = l ? hljs.highlight(code, { language: l }).value : hljs.highlightAuto(code).value;
				return `<pre><code class="hljs ${l}">${val}</code></pre>`;
			})
			.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
			.replace(/\n/g, '<br/>');

	type ChatMsg = {
		id: number;
		kind: 'assign' | 'done' | 'feedback' | 'error' | 'system' | 'user';
		author: string;
		text: string;
		ts: number;
		ping?: boolean; // trigger efek getar avatar
	};

	let msgs: ChatMsg[] = [];
	let typing = new Set<string>(); // agent id yang sedang "mengetik"
	let seq = 0;
	let draft = '';
	let showErrors = false; // drawer observability
	let errLogs: string[] = [];

	const push = (kind: ChatMsg['kind'], author: string, text: string, ping = false) => {
		msgs = [...msgs, { id: ++seq, kind, author, text, ts: Date.now(), ping }];
	};

	// kirim pesan user: render + trigger mention → delegateTask (LLM asli)
	const send = async () => {
		const text = draft.trim();
		if (!text) return;
		push('user', 'User', text);
		draft = '';
		await triggerMention({ chatId: 'chat-demo-1', text });
	};

	const logErr = (e: string) => {
		errLogs = [...errLogs.slice(-49), `${new Date().toLocaleTimeString()} — ${e}`];
		showErrors = true;
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
		const err = String(p.error ?? 'unknown');
		logErr(err);
		push('error', 'System', tplError(err));
	});
	on('orchestration:delegation-done', (p) => {
		typing.clear();
		typing = new Set();
		push('done', agentName(p.leaderId as string), tplDone(agentName(p.leaderId as string), String(p.finalText ?? '').slice(0, 200)), true);
	});
	// header tengah ikut channel aktif (reactive) — resolve nama agent dari id
	$: channelName = $activeChannel.startsWith('leader:')
		? (agentName($activeChannel.slice(7)) || $activeChannel.slice(7))
		: $activeChannel.startsWith('stream:')
			? `stream-${agentName($activeChannel.slice(7)) || $activeChannel.slice(7)}`
			: $activeChannel;
</script>

<div class="main-chat">
	<header class="chat-header">
		<span class="ch-hash">#</span>
		<span class="ch-name">{channelName}</span>
		<span class="ch-topic">— orkestrasi agent lokal</span>
	</header>

	<div class="chat-scroll">
		{#if msgs.length === 0}
			<p class="empty">Belum ada aktivitas. Coba trigger delegasi di bawah! 👇</p>
		{/if}
		{#each msgs as m (m.id)}
			<div class="msg {m.kind}">
				<span class="msg-avatar {m.ping ? 'ping' : ''}">{m.author.slice(0, 1).toUpperCase()}</span>
				<div class="msg-body">
					<span class="msg-author">{m.author} <span class="msg-time">{new Date(m.ts).toLocaleTimeString()}</span></span>
					<span class="msg-text">{@html md(m.text)}</span>
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

	<!-- observability drawer: raw error logs -->
	<button class="err-toggle" on:click={() => (showErrors = !showErrors)}>⚠️ {errLogs.length}</button>
	{#if showErrors}
		<div class="err-drawer">
			<div class="err-head">Error Logs (backend orkestrasi / Ollama)</div>
			{#if errLogs.length === 0}
				<p class="err-empty">Belum ada error. Aman! ✅</p>
			{/if}
			{#each errLogs as e, i (i)}
				<pre class="err-line">{e}</pre>
			{/each}
		</div>
	{/if}
</div>

<style>
	.main-chat {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-width: 0;
		height: 100%;
		background: #313338;
		color: #dbdee1;
		overflow: hidden;
	}
	.chat-header {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 12px 16px;
		border-bottom: 1px solid #26272b;
		font-size: 15px;
		font-weight: 700;
		color: #f2f3f5;
		flex-shrink: 0;
	}
	.ch-hash {
		color: #80848e;
	}
	.ch-topic {
		font-weight: 400;
		font-size: 13px;
		color: #949ba4;
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
	/* ping effect: avatar getar saat agen selesai/menyebut user */
	.msg-avatar.ping {
		animation: shake 0.5s ease;
	}
	@keyframes shake {
		0%, 100% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(-3px) rotate(-6deg);
		}
		50% {
			transform: translateX(3px) rotate(6deg);
		}
		75% {
			transform: translateX(-2px);
		}
	}
	/* markdown code block */
	.msg-text :global(pre) {
		background: #1e1f22;
		border-radius: 6px;
		padding: 8px 10px;
		overflow-x: auto;
		font-size: 12px;
	}
	.msg-text :global(code) {
		background: #1e1f22;
		border-radius: 4px;
		padding: 1px 4px;
		font-size: 12px;
	}
	.msg-text :global(pre code) {
		padding: 0;
		background: none;
	}
	/* observability drawer */
	.err-toggle {
		margin: 0 12px 8px;
		align-self: flex-start;
		background: #3a2a2a;
		border: none;
		color: #f23f43;
		border-radius: 6px;
		padding: 4px 10px;
		font-size: 12px;
		cursor: pointer;
	}
	.err-drawer {
		margin: 0 12px 12px;
		background: #1e1f22;
		border: 1px solid #3a2a2a;
		border-radius: 8px;
		padding: 8px 10px;
		max-height: 160px;
		overflow-y: auto;
	}
	.err-head {
		font-size: 12px;
		font-weight: bold;
		color: #f23f43;
		margin-bottom: 4px;
	}
	.err-empty {
		font-size: 12px;
		color: #23a55a;
	}
	.err-line {
		font-size: 11px;
		color: #f0b232;
		white-space: pre-wrap;
		word-break: break-all;
		margin: 2px 0;
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
		margin: 0 16px 16px;
		padding: 12px 14px;
		border: none;
		border-radius: 10px;
		background: #383a40;
		color: #dbdee1;
		font-size: 15px;
		font-weight: 500;
		outline: none;
	}
	.chat-input::placeholder {
		color: #6d6f78;
	}
</style>
