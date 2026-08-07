<script lang="ts">
	// utest — Fase 4 Discord-like layout: Left Sidebar | Main Chat | Right Sidebar
	import { agentList, addAgent } from '$lib/stores/agent/agentStore';
	import { activeWorkspaceId } from '$lib/stores/workspace/workspaceStore';
	import LeftSidebar from './LeftSidebar.svelte';
	import MainChat from './MainChat.svelte';
	import AgentRosterPanel from './AgentRosterPanel.svelte';

	// seed idempotent — hanya tambah agen kalau belum ada
	$: if ($agentList.length === 0) {
		addAgent({ id: 'a1', name: 'Hermes', systemPrompt: 'assistant utama', model: 'gemma4:e4b' });
		addAgent({ id: 'a2', name: 'Planner', systemPrompt: 'perencana', model: 'hermes3:latest' });
		addAgent({ id: 'a3', name: 'Critic', systemPrompt: 'penyunting', model: 'gemma4:e4b' });
	}
</script>

<svelte:head><title>Agent Harness</title></svelte:head>

<div class="f4-layout">
	<LeftSidebar onSwitch={(id) => activeWorkspaceId.set(id)} onAdd={(id) => activeWorkspaceId.set(id)} />
	<MainChat />
	<AgentRosterPanel />
</div>

<style>
	.f4-layout {
		display: flex;
		height: 100vh;
		overflow: hidden;
	}
</style>
