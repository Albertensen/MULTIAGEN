<script lang="ts">
	// LeftSidebar.svelte — Discord-style Workspace/Server navigation (Fase 4)
	import { workspaceList, activeWorkspaceId, createWorkspace, activeTenantId } from '$lib/stores/workspace/workspaceStore';

	export let onSwitch: (id: string) => void = () => {};
	export let onAdd: (name: string) => void = () => {};

	let newName = '';
	let collapsed = false;
</script>

<aside class="ws-sidebar" class:collapsed={collapsed}>
	<div class="ws-header">
		<strong>⚡ Workspaces</strong>
		<button class="mini" on:click={() => (collapsed = !collapsed)} title="toggle">{collapsed ? '»' : '«'}</button>
	</div>

	{#if !collapsed}
		<ul class="ws-list">
			{#each $workspaceList as ws (ws.id)}
				<li>
					<button
						class="ws-item"
						class:active={$activeWorkspaceId === ws.id}
						on:click={() => onSwitch(ws.id)}
					>
						<span class="ws-icon">{ws.name.slice(0, 1).toUpperCase()}</span>
						<span class="ws-meta">
							<span class="ws-name">{ws.name}</span>
							<span class="ws-sub">{ws.agentIds.length} bots</span>
						</span>
					</button>
				</li>
			{/each}
		</ul>

		<form
			class="ws-add"
			on:submit={(e) => {
				e.preventDefault();
				if (!newName.trim()) return;
				const ws = createWorkspace({ name: newName.trim(), ownerId: $activeTenantId });
				onAdd(ws.id);
				newName = '';
			}}
		>
			<input bind:value={newName} placeholder="nama workspace baru..." />
			<button type="submit" class="mini">+</button>
		</form>
	{/if}
</aside>

<style>
	.ws-sidebar {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 220px;
		min-width: 220px;
		height: 100%;
		padding: 12px;
		background: #1e1f22;
		color: #dbdee1;
		border-right: 1px solid #2b2d31;
		overflow-y: auto;
		box-sizing: border-box;
	}
	.ws-sidebar.collapsed {
		width: 48px;
		min-width: 48px;
	}
	.ws-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 8px;
		border-bottom: 1px solid #2b2d31;
	}
	.mini {
		background: #2b2d31;
		border: none;
		color: #b5bac1;
		border-radius: 4px;
		cursor: pointer;
		padding: 2px 8px;
	}
	.ws-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.ws-item {
		display: flex;
		align-items: center;
		gap: 8px;
		width: 100%;
		padding: 6px 8px;
		background: transparent;
		border: none;
		border-radius: 6px;
		color: #dbdee1;
		cursor: pointer;
		text-align: left;
	}
	.ws-item:hover {
		background: #2b2d31;
	}
	.ws-item.active {
		background: #404249;
	}
	.ws-icon {
		width: 28px;
		height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #5865f2;
		color: #fff;
		border-radius: 50%;
		font-weight: bold;
		flex-shrink: 0;
	}
	.ws-meta {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.ws-name {
		font-size: 13px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.ws-sub {
		font-size: 11px;
		color: #949ba4;
	}
	.ws-add {
		display: flex;
		gap: 4px;
		margin-top: auto;
		padding-top: 8px;
	}
	.ws-add input {
		flex: 1;
		background: #2b2d31;
		border: none;
		border-radius: 4px;
		color: #dbdee1;
		padding: 6px 8px;
		font-size: 12px;
		min-width: 0;
	}
</style>
