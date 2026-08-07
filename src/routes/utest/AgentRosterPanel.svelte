<script lang="ts">
	// AgentRosterPanel.svelte — Discord-style Right Sidebar: online agents & status (Fase 4)
	import { agentList } from '$lib/stores/agent/agentStore';
	import { workspaceList, activeWorkspaceId } from '$lib/stores/workspace/workspaceStore';

	// agent roster di workspace aktif (fallback: semua agen)
	const rosterAgents = () => {
		const ws = $workspaceList.find((w) => w.id === $activeWorkspaceId);
		if (!ws) return $agentList;
		return ws.agentIds
			.map((id) => $agentList.find((a) => a.id === id))
			.filter((a): a is NonNullable<typeof a> => !!a);
	};

	const statusDot = (s: AgentStatus): string => {
		switch (s) {
			case 'online':
				return '#23a55a';
			case 'busy':
				return '#f0b232';
			case 'thinking':
				return '#5865f2';
			default:
				return '#80848e';
		}
	};

	// role lookup: leader = 1 per workspace, sisanya worker
	const getRole = (agentId: string): string => {
		const ws = $workspaceList.find((w) => w.id === $activeWorkspaceId);
		if (!ws) return '—';
		return ws.roster?.[agentId] === 'leader' ? '👑 Leader' : '⚙ Worker';
	};
</script>

<aside class="roster-panel">
	<div class="rp-header">
		<strong>👥 Agent Roster</strong>
		<span class="rp-count">{rosterAgents().length} on-duty</span>
	</div>
	<ul class="rp-list">
		{#each rosterAgents() as agent (agent.id)}
			<li class="rp-item">
				<span class="rp-dot" style={`background:${statusDot(agent.status)}`}></span>
				<span class="rp-info">
					<span class="rp-name">{agent.name}</span>
					<span class="rp-sub">{agent.status} · {agent.provider ?? 'ollama'}</span>
				</span>
				<span class="rp-role">
					{getRole(agent.id)}
				</span>
			</li>
		{/each}
	</ul>
</aside>

<style>
	.roster-panel {
		display: flex;
		flex-direction: column;
		gap: 8px;
		width: 240px;
		min-width: 240px;
		height: 100%;
		padding: 12px;
		background: #1e1f22;
		color: #dbdee1;
		border-left: 1px solid #2b2d31;
		overflow-y: auto;
		box-sizing: border-box;
	}
	.rp-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 8px;
		border-bottom: 1px solid #2b2d31;
	}
	.rp-count {
		font-size: 11px;
		color: #949ba4;
	}
	.rp-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.rp-item {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 6px 8px;
		background: #2b2d31;
		border-radius: 6px;
	}
	.rp-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		flex-shrink: 0;
	}
	.rp-info {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
	}
	.rp-name {
		font-size: 13px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.rp-sub {
		font-size: 11px;
		color: #949ba4;
	}
	.rp-role {
		font-size: 11px;
		white-space: nowrap;
	}
	.rp-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
		margin-top: auto;
		padding-top: 8px;
	}
	.mini {
		background: #2b2d31;
		border: none;
		color: #b5bac1;
		border-radius: 4px;
		cursor: pointer;
		padding: 2px 6px;
		font-size: 11px;
	}
</style>
