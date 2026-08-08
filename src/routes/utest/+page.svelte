<script lang="ts">
	// utest — Fase 4 Discord-like layout: Left Sidebar | Main Chat | Right Sidebar
	import { agentList, addAgent } from '$lib/stores/agent/agentStore';
	import { activeWorkspaceId, activeChannel } from '$lib/stores/workspace/workspaceStore';
	import { workspaceList, createWorkspace, updateWorkspace } from '$lib/stores/workspace/workspaceStore';
	import LeftSidebar from './LeftSidebar.svelte';
	import MainChat from './MainChat.svelte';
	import FileManagerPanel from './FileManagerPanel.svelte';
	import LeaderBuilderPanel from './LeaderBuilderPanel.svelte';
	import LeaderChatPanel from './LeaderChatPanel.svelte';
	import AgentRosterPanel from './AgentRosterPanel.svelte';

	// seed idempotent per-agent — tambah hanya yang belum ada (hindari clash localStorage lama)
	const SEED_AGENTS = [
		{ id: 'a1', name: 'Hermes', systemPrompt: 'assistant utama', model: 'gemma4:e4b', isLeader: true },
		{ id: 'a2', name: 'Planner', systemPrompt: 'perencana', model: 'hermes3:latest' },
		{ id: 'a3', name: 'Critic', systemPrompt: 'penyunting', model: 'gemma4:e4b' },
		{ id: 'a4', name: 'Programmer', systemPrompt: 'pengkode', model: 'gemma4:e4b' }
	];
	$: if ($agentList.length > 0 || typeof localStorage !== 'undefined') {
		const existing = new Set($agentList.map((a) => a.id));
		for (const a of SEED_AGENTS) {
			if (!existing.has(a.id)) addAgent(a);
		}
	}

	// seed workspace idempoten — "Development Team" aktif pertama kali
	$: if ($workspaceList.length === 0) {
		const ws = createWorkspace({ name: 'Development Team', agentIds: ['a1', 'a2', 'a3', 'a4'] });
		activeWorkspaceId.set(ws.id);
	} else {
		// pastikan a4 masuk workspace (workspace lama mungkin tanpa a4)
		const ws = $workspaceList[0];
		if (ws && !(ws.agentIds ?? []).includes('a4')) {
			updateWorkspace(ws.id, { agentIds: [...(ws.agentIds ?? []), 'a4'] });
		}
		// workspace sudah ada (persisted) tapi belum ada yg aktif — pilih pertama
		if (!$activeWorkspaceId) {
			activeWorkspaceId.set($workspaceList[0].id);
		}
	}
</script>

<svelte:head><title>Agent Harness</title></svelte:head>

<div class="f4-layout">
	<LeftSidebar onSwitch={(id) => activeWorkspaceId.set(id)} onAdd={(id) => activeWorkspaceId.set(id)} />
	<div class="f4-main">
		{#if $activeChannel === 'create-leader'}
			<LeaderBuilderPanel />
		{:else if $activeChannel.startsWith('leader:')}
			<LeaderChatPanel />
		{:else if $activeChannel.startsWith('dir:')}
			<FileManagerPanel />
		{:else}
			<MainChat />
		{/if}
	</div>
	<AgentRosterPanel />
</div>

<style>
	.f4-layout {
		display: flex;
		height: 100vh;
		overflow: hidden;
	}
	.f4-main {
		flex: 1;
		min-width: 0;
		display: flex;
	}
</style>
