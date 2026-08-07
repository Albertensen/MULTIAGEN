<script lang="ts">
	// LeaderBuilderPanel.svelte — #🧠 leader-builder: form setup Leader Agent (UI only, belum wire backend)
	import { providerList } from '$lib/stores/provider/providerStore';

	let name = 'Hermes';
	let systemPrompt = `Kamu adalah Leader arsitek. Rencanakan eksekusi, panggil worker via [CALL: agent], lalu sintesis hasil final.`;
	let provider = 'ollama';
	let apiKey = '';

	const providers = $providerList.map((p) => p.id);
	// tambah provider cloud lain (OpenAI, Anthropic, Gemini) utk opsi dropdown
	const extraProviders = ['openai', 'anthropic', 'gemini', 'mistral'];

	const saveConfig = () => {
		// UI-only: placeholder — wire ke backend save API nanti
		console.log('[leader-builder] save', { name, provider, apiKey: apiKey ? '***' : '' });
	};
</script>

<div class="lb-panel">
	<header class="lb-header">
		<span class="lb-hash">🧠</span>
		<span class="lb-name">leader-builder</span>
		<span class="lb-topic">— setup Leader Agent</span>
	</header>

	<div class="lb-body">
		<div class="lb-card">
			<h2 class="lb-title">🛠️ Create / Setup Leader Agent</h2>
			<p class="lb-sub">Konfigurasi Leader: identitas, instruksi master, dan provider LLM.</p>

			<label class="lb-label" for="lb-name">Nama Leader</label>
			<input id="lb-name" class="lb-input" type="text" bind:value={name} placeholder="cth: Hermes, Architect, Commander" />

			<label class="lb-label" for="lb-prompt">System Prompt / Master Plan</label>
			<textarea id="lb-prompt" class="lb-textarea" bind:value={systemPrompt} placeholder="Tulis system prompt / master plan panjang di sini..."></textarea>

			<label class="lb-label" for="lb-provider">Provider LLM</label>
			<select id="lb-provider" class="lb-select" bind:value={provider}>
				{#each [...new Set([...providers, ...extraProviders])] as p (p)}
					<option value={p}>{p}</option>
				{/each}
			</select>

			<label class="lb-label" for="lb-key">API Key</label>
			<input id="lb-key" class="lb-input" type="password" bind:value={apiKey} placeholder="sk-..." />

			<button class="lb-save" on:click={saveConfig}>💾 Save Configuration</button>
		</div>
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
	.lb-hash {
		color: #80848e;
	}
	.lb-topic {
		font-weight: 400;
		font-size: 13px;
		color: #949ba4;
	}
	.lb-body {
		flex: 1;
		overflow-y: auto;
		padding: 24px 32px;
		display: flex;
		justify-content: center;
	}
	.lb-card {
		width: 100%;
		max-width: 720px;
		background: #1e1f22;
		border: 1px solid #26272b;
		border-radius: 14px;
		padding: 28px 32px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		align-self: flex-start;
	}
	.lb-title {
		margin: 0 0 2px;
		font-size: 20px;
		color: #f2f3f5;
	}
	.lb-sub {
		margin: 0 0 14px;
		font-size: 13px;
		color: #949ba4;
	}
	.lb-label {
		margin-top: 8px;
		font-size: 13px;
		font-weight: 700;
		color: #b5bac1;
		letter-spacing: 0.3px;
	}
	.lb-input,
	.lb-select {
		width: 100%;
		background: #313338;
		border: 1px solid #26272b;
		border-radius: 8px;
		color: #dbdee1;
		font-size: 14px;
		padding: 10px 12px;
		outline: none;
		box-sizing: border-box;
	}
	.lb-textarea {
		width: 100%;
		min-height: 200px;
		resize: vertical;
		background: #313338;
		border: 1px solid #26272b;
		border-radius: 8px;
		color: #dbdee1;
		font-size: 14px;
		line-height: 1.6;
		padding: 12px;
		outline: none;
		box-sizing: border-box;
		font-family: monospace;
	}
	.lb-input:focus,
	.lb-textarea:focus,
	.lb-select:focus {
		border-color: #5865f2;
	}
	.lb-save {
		margin-top: 18px;
		align-self: flex-start;
		background: #5865f2;
		color: #fff;
		border: none;
		border-radius: 8px;
		padding: 10px 24px;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
	}
	.lb-save:hover {
		background: #4752c4;
	}
</style>
