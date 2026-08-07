<script lang="ts">
	// LeaderBuilderPanel.svelte — #🧠 leader-builder: instruksi panjang ke Leader + edit System Prompt
	import { agentList, updateAgent } from '$lib/stores/agent/agentStore';

	// leader = agent pertama (roster rule: 1 leader per workspace)
	const leader = $agentList[0];

	let instruction = `Instruksi ke Leader ${leader?.name ?? ''}:

Rancang rencana eksekusi untuk:
1. ...
2. ...`;
	let systemPrompt = leader?.systemPrompt ?? '';

	const savePrompt = () => {
		if (leader) {
			updateAgent(leader.id, { systemPrompt });
		}
	};
</script>

<div class="lb-panel">
	<header class="lb-header">
		<span class="lb-hash">🧠</span>
		<span class="lb-name">leader-builder</span>
		<span class="lb-topic">— susun instruksi & system prompt Leader</span>
	</header>

	<div class="lb-body">
		<section class="lb-section">
			<label class="lb-label">📝 Instruksi / Ide Panjang</label>
			<textarea class="lb-textarea" bind:value={instruction} placeholder="Tulis instruksi panjang ke Leader di sini..."></textarea>
		</section>

		<section class="lb-section">
			<div class="lb-label-row">
				<label class="lb-label">⚙️ System Prompt Leader</label>
				<span class="lb-target">{leader?.name ?? '-'} · {leader?.model ?? '-'}</span>
			</div>
			<textarea class="lb-textarea sm" bind:value={systemPrompt} placeholder="System prompt untuk Leader..."></textarea>
			<button class="lb-save" on:click={savePrompt}>💾 Simpan</button>
		</section>
	</div>
</div>

<style>
	.lb-panel {
		display: flex;
		flex-direction: column;
		flex: 1;
		min-width: 0;
		height: 100%;
		background: #313338;
		color: #dbdee1;
		overflow: hidden;
	}
	.lb-header {
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
	.lb-topic {
		font-weight: 400;
		font-size: 13px;
		color: #949ba4;
	}
	.lb-body {
		flex: 1;
		overflow-y: auto;
		padding: 20px 24px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.lb-section {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.lb-label {
		font-size: 13px;
		font-weight: 700;
		color: #b5bac1;
		letter-spacing: 0.3px;
	}
	.lb-label-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.lb-target {
		font-size: 12px;
		color: #80848e;
	}
	.lb-textarea {
		width: 100%;
		min-height: 320px;
		resize: vertical;
		background: #1e1f22;
		border: 1px solid #26272b;
		border-radius: 10px;
		color: #dbdee1;
		font-size: 15px;
		line-height: 1.6;
		padding: 14px;
		outline: none;
		box-sizing: border-box;
	}
	.lb-textarea.sm {
		min-height: 140px;
		font-size: 13px;
		font-family: monospace;
	}
	.lb-textarea:focus {
		border-color: #5865f2;
	}
	.lb-save {
		align-self: flex-start;
		background: #5865f2;
		color: #fff;
		border: none;
		border-radius: 8px;
		padding: 8px 20px;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
	}
	.lb-save:hover {
		background: #4752c4;
	}
</style>
