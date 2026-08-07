<script lang="ts">
	// LeftSidebar.svelte — true Discord clone: Server Bar + Channel Sidebar hierarkis
	import { workspaceList, activeWorkspaceId, activeChannel, activeLeaderId, createWorkspace } from '$lib/stores/workspace/workspaceStore';
	import { agentList } from '$lib/stores/agent/agentStore';

	export let onSwitch: (id: string) => void = () => {};
	export let onAdd: (id: string) => void = () => {};

	let collapsed = false;

	// tambah workspace via prompt bawaan (bukan form inline)
	const addWs = () => {
		const name = window.prompt('Nama Workspace baru:', 'Development Team');
		if (!name?.trim()) return;
		const ws = createWorkspace({ name: name.trim(), agentIds: ['a1', 'a2', 'a3'] });
		onAdd(ws.id);
	};

	// leader agen = agent dengan role 'leader' di workspace aktif (fallback: agent pertama)
	const leaders = () => {
		const ws = $workspaceList.find((w) => w.id === $activeWorkspaceId);
		if (!ws) return $agentList.slice(0, 1);
		const ids = Object.entries(ws.roster ?? {})
			.filter(([, r]) => r === 'leader')
			.map(([id]) => id);
		const found = ids.map((id) => $agentList.find((a) => a.id === id)).filter((a): a is NonNullable<typeof a> => !!a);
		return found.length > 0 ? found : $agentList.slice(0, 1);
	};

	const go = (ch: string, leaderId: string | null = null) => {
		activeChannel.set(ch);
		if (leaderId) activeLeaderId.set(leaderId);
	};
</script>

<div class="ls-root">
	<!-- SERVER BAR (paling kiri, w-16 / #1E1F22) -->
	<nav class="server-bar">
		{#each $workspaceList as ws (ws.id)}
			<button
				class="server-icon {$activeWorkspaceId === ws.id ? 'active' : ''}"
				title={ws.name}
				on:click={() => onSwitch(ws.id)}
			>
				{ws.name.slice(0, 2).toUpperCase()}
			</button>
		{/each}
		<button class="server-icon add" title="Tambah workspace" on:click={addWs}>+</button>
	</nav>

	<!-- CHANNEL SIDEBAR (w-60 / #2B2D31) -->
	<aside class="channel-sidebar">
		<header class="ws-header">
			<strong>{$workspaceList.find((w) => w.id === $activeWorkspaceId)?.name ?? 'No Server'}</strong>
			<button class="collapse-btn" on:click={() => (collapsed = !collapsed)} title="Collapse">
				{collapsed ? '»' : '«'}
			</button>
		</header>

		{#if !collapsed}
			<div class="chan-group">
				<span class="chan-group-label">👑 LEADER MANAGEMENT</span>
				<button class="chan-item {$activeChannel === 'create-leader' ? 'active' : ''}" on:click={() => go('create-leader')}>
					<span class="hash">🛠️</span> create-leader
				</button>
				{#each leaders() as l (l.id)}
					<button class="chan-item {$activeChannel === `leader:${l.id}` ? 'active' : ''}" on:click={() => go(`leader:${l.id}`, l.id)}>
						<span class="hash">🧠</span> {l.name}
					</button>
				{/each}
			</div>

			<div class="chan-group">
				<span class="chan-group-label">⚡ TASK STREAMS</span>
				{#each leaders() as l (l.id)}
					<button class="chan-item {$activeChannel === `stream:${l.id}` ? 'active' : ''}" on:click={() => go(`stream:${l.id}`, l.id)}>
						<span class="hash">⚡</span> stream-{l.name.toLowerCase().replace(/\s+/g, '-')}
					</button>
				{/each}
			</div>
		{/if}

		<!-- USER PROFILE (pojok kiri bawah) -->
		<footer class="user-profile">
			<div class="up-avatar">U</div>
			<div class="up-info">
				<span class="up-name">User</span>
				<span class="up-status">online</span>
			</div>
			<div class="up-icons">
				<span title="Mic">🎙️</span>
				<span title="Settings">⚙️</span>
			</div>
		</footer>
	</aside>
</div>

<style>
	.ls-root {
		display: flex;
		height: 100%;
		background: #1e1f22;
	}
	/* server bar — w-16 */
	.server-bar {
		width: 72px;
		flex-shrink: 0;
		background: #1e1f22;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 12px 0;
		overflow-y: auto;
	}
	.server-icon {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: #313338;
		color: #dbdee1;
		border: none;
		font-weight: bold;
		cursor: pointer;
		transition: border-radius 0.15s;
	}
	.server-icon:hover {
		border-radius: 16px;
		background: #5865f2;
	}
	.server-icon.active {
		border-radius: 16px;
		background: #5865f2;
	}
	.server-icon.add {
		background: transparent;
		border: 2px dashed #4e5058;
		color: #23a55a;
	}
	/* channel sidebar — w-60 */
	.channel-sidebar {
		width: 240px;
		flex-shrink: 0;
		background: #2b2d31;
		display: flex;
		flex-direction: column;
	}
	.ws-header {
		padding: 14px 16px;
		border-bottom: 1px solid #1e1f22;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #f2f3f5;
		font-size: 15px;
	}
	.collapse-btn {
		background: none;
		border: none;
		color: #949ba4;
		cursor: pointer;
		font-size: 14px;
	}
	.chan-group {
		padding: 12px 8px 0;
	}
	.chan-group-label {
		font-size: 11px;
		font-weight: 700;
		color: #949ba4;
		padding-left: 8px;
		letter-spacing: 0.4px;
	}
	.chan-item {
		display: flex;
		align-items: center;
		gap: 6px;
		width: 100%;
		padding: 7px 8px;
		margin-top: 2px;
		border: none;
		border-radius: 5px;
		background: none;
		color: #949ba4;
		font-size: 14px;
		cursor: pointer;
		text-align: left;
	}
	.chan-item:hover {
		background: #404249;
		color: #dbdee1;
	}
	.chan-item.active {
		background: #404249;
		color: #fff;
	}
	.hash {
		color: #80848e;
		font-weight: 700;
	}
	/* user profile — pojok kiri bawah */
	.user-profile {
		margin-top: auto;
		display: flex;
		align-items: center;
		gap: 8px;
		background: #232428;
		padding: 8px 10px;
	}
	.up-avatar {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #5865f2;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
	}
	.up-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		line-height: 1.2;
	}
	.up-name {
		color: #f2f3f5;
		font-size: 13px;
		font-weight: 600;
	}
	.up-status {
		color: #23a55a;
		font-size: 11px;
	}
	.up-icons {
		display: flex;
		gap: 8px;
		color: #b5bac1;
		font-size: 15px;
	}
</style>
