<script lang="ts">
	// utest — Fase 4 Discord-like layout: Left Sidebar | Main Chat | Right Sidebar
	import { agentList, addAgent, removeAgent } from '$lib/stores/agent/agentStore';
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
		{ id: 'w1', name: 'DataFormatter', systemPrompt: 'Pengatur Data mentah ke JSON', model: 'gemma4:e4b' },
		{ id: 'w2', name: 'DummySeeder', systemPrompt: 'Pembuat Data Fiktif/Mock data', model: 'gemma4:e4b' },
		{ id: 'w3', name: 'CssScaffolder', systemPrompt: 'Pembuat Kerangka HTML/React + Tailwind', model: 'gemma4:e4b' },
		{ id: 'w4', name: 'ErrorSummarizer', systemPrompt: 'Peringkas Log Error Terminal', model: 'gemma4:e4b' },
		{ id: 'w5', name: 'Copywriter', systemPrompt: 'Penulis Konten & SEO', model: 'gemma4:e4b' },
		{ id: 'w6', name: 'CrudGenerator', systemPrompt: 'Pembuat Boilerplate API Controller/Model', model: 'gemma4:e4b' }
	];
	$: if ($agentList.length > 0 || typeof localStorage !== 'undefined') {
		const existing = new Set($agentList.map((a) => a.id));
		for (const a of SEED_AGENTS) {
			if (!existing.has(a.id)) addAgent(a);
		}
		// Fase 5: hapus worker lama (Planner/Critic/Programmer) biar roster bersih
		for (const a of $agentList) {
			if (a.id !== 'a1' && a.id.startsWith('a') && !SEED_AGENTS.some((s) => s.id === a.id)) {
				removeAgent(a.id);
			}
		}
	}

	// seed workspace idempoten — "Development Team" aktif pertama kali
	$: if ($workspaceList.length === 0) {
		const ws = createWorkspace({ name: 'Development Team', agentIds: ['a1', 'w1', 'w2', 'w3', 'w4', 'w5', 'w6'] });
		activeWorkspaceId.set(ws.id);
	} else {
		// pastikan semua w1-w6 masuk workspace (workspace lama mungkin tanpa)
		const ws = $workspaceList[0];
		const want = ['a1', 'w1', 'w2', 'w3', 'w4', 'w5', 'w6'];
		if (ws && want.some((id) => !(ws.agentIds ?? []).includes(id))) {
			updateWorkspace(ws.id, { agentIds: want });
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
