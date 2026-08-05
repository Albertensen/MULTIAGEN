<script lang="ts">
	// Throwaway harness: uji multi-agent store secara runtime di browser.
	// Hapus file ini setelah integrasi selesai.
	import {
		agents,
		agentList,
		activeAgentId,
		activeAgent,
		addAgent,
		updateAgent,
		assignAgent,
		clearActiveAgent,
		resetAgents
	} from '$lib/stores/agent/agentStore';

	let log: string[] = [];

	addAgent({ id: 'a1', name: 'Hermes', systemPrompt: 'assistant utama', model: 'gemma4:e4b' });
	addAgent({ id: 'a2', name: 'Planner', systemPrompt: 'perencana', model: 'hermes3:latest' });
	addAgent({ id: 'a3', name: 'Critic', systemPrompt: 'penyunting', model: 'gemma4:e4b' });

	$: summary = {
		total: $agentList.length,
		names: $agentList.map((a) => a.name).join(', '),
		active: $activeAgent ? $activeAgent.name : null,
		activeId: $activeAgentId
	};
</script>

<h1>Agent Store Harness</h1>

<p>
	<strong>agents (readonly, reactive):</strong>
	{$agents ? Object.entries($agents).length : 0} agen
</p>
<ul>
	{#each $agentList as a (a.id)}
		<li>{a.id} — {a.name} ({a.model}) [active: {a.active ? '✓' : '✗'}]</li>
	{/each}
</ul>

<p><strong>activeAgentId:</strong> {$activeAgentId ?? 'null'}</p>
<p><strong>activeAgent:</strong> {$activeAgent ? $activeAgent.name : 'null'}</p>

<!-- aksi yang bisa dipicu, buat manual test -->
<button on:click={() => assignAgent('a2')}>assign a2</button>
<button on:click={() => clearActiveAgent()}>clear</button>
<button on:click={() => resetAgents()}>reset</button>
<button
	on:click={() =>
		updateAgent('a3', { systemPrompt: 'penyunting baru' })}
>update a3 prompt</button>

<pre>{JSON.stringify(summary)}</pre>