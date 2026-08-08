<script lang="ts">
	// FileManagerPanel.svelte — manager direktori (global / isolated per-leader)
	import { activeChannel, activeLeaderId } from '$lib/stores/workspace/workspaceStore';
	import { agentList } from '$lib/stores/agent/agentStore';
	import { filesByDirStore } from '$lib/stores/fileStore';
	import type { ArtifactFile } from '$lib/stores/fileStore';

	// nama direktori: dir:global → "global-shared", dir:<id> → "dir-<nama>"
	$: dirId = (() => {
		const id = $activeChannel.replace('dir:', '');
		return id;
	})();
	$: dirName = (() => {
		const id = $activeChannel.replace('dir:', '');
		if (id === 'global') return 'global-shared';
		const a = $agentList.find((x) => x.id === id);
		return a ? `dir-${a.name.toLowerCase().replace(/\s+/g, '-')}` : id;
	})();
	// file di direktori aktif (reactive)
	let files: ArtifactFile[] = [];
	$: unsubFiles = filesByDirStore(dirId).subscribe((v) => (files = v));
</script>

<div class="fm-panel">
	<header class="fm-header">
		<span class="fm-hash"># 📂</span>
		<span class="fm-name">{dirName}</span>
		<span class="fm-scope">{$activeLeaderId ? 'ISOLATED' : 'GLOBAL'}</span>
	</header>

	<div class="fm-drop">
		<div class="fm-drop-inner">
			<span class="fm-drop-icon">📂</span>
			<span class="fm-drop-text">Drag & Drop Files Here</span>
			<span class="fm-drop-sub">atau klik untuk memilih file</span>
		</div>
	</div>

	<div class="fm-list">
		{#if files.length === 0}
			<span class="fm-list-empty">Belum ada file di direktori ini.</span>
		{:else}
			{#each files as f (f.id)}
				<details class="fm-file">
					<summary class="fm-file-summary">
						<span class="fm-file-icon">📄</span>
						<span class="fm-file-name">{f.name}</span>
						<span class="fm-file-meta">{new Date(f.ts).toLocaleTimeString()}</span>
					</summary>
					<pre class="fm-file-content">{f.content}</pre>
				</details>
			{/each}
		{/if}
	</div>
</div>

<style>
	.fm-panel {
		flex: 1;
		display: flex;
		flex-direction: column;
		background: #313338;
		color: #dbdee1;
		height: 100%;
		min-width: 0;
	}
	.fm-header {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 12px 16px;
		border-bottom: 1px solid #1e1f22;
		font-size: 15px;
	}
	.fm-hash {
		color: #80848e;
	}
	.fm-name {
		font-weight: 600;
	}
	.fm-scope {
		margin-left: auto;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.5px;
		padding: 2px 8px;
		border-radius: 8px;
		background: #23a55a;
		color: #fff;
	}
	.fm-drop {
		margin: 16px;
		padding: 32px 16px;
		border: 2px dashed #4e5058;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		cursor: pointer;
	}
	.fm-drop:hover {
		border-color: #5865f2;
	}
	.fm-drop-inner {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.fm-drop-icon {
		font-size: 32px;
	}
	.fm-drop-text {
		font-weight: 600;
		font-size: 15px;
	}
	.fm-drop-sub {
		font-size: 12px;
		color: #949ba4;
	}
	.fm-list {
		flex: 1;
		padding: 0 16px;
		overflow-y: auto;
	}
	.fm-list-empty {
		font-size: 13px;
		color: #949ba4;
	}
	.fm-file {
		margin-bottom: 8px;
		background: #2b2d31;
		border-radius: 8px;
		border: 1px solid #1e1f22;
	}
	.fm-file-summary {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 12px;
		cursor: pointer;
		list-style: none;
		font-size: 13px;
	}
	.fm-file-summary::-webkit-details-marker {
		display: none;
	}
	.fm-file-icon {
		font-size: 14px;
	}
	.fm-file-name {
		font-weight: 600;
		color: #dbdee1;
	}
	.fm-file-meta {
		margin-left: auto;
		font-size: 11px;
		color: #80848e;
	}
	.fm-file-content {
		padding: 10px 12px;
		margin: 0;
		border-top: 1px solid #1e1f22;
		font-size: 11px;
		line-height: 1.5;
		color: #b5bac1;
		white-space: pre-wrap;
		word-break: break-word;
		max-height: 240px;
		overflow-y: auto;
	}
</style>
