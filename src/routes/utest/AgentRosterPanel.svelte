<script lang="ts">
	// AgentRosterPanel.svelte — Discord-style Right Sidebar: online agents & status (Fase 4)
	import { agentList } from '$lib/stores/agent/agentStore';
	import type { AgentStatus } from '$lib/stores/agent/agentStore';
	import { workspaceList, activeWorkspaceId } from '$lib/stores/workspace/workspaceStore';
	import { costAudit } from '$lib/stores/costAudit/costAuditStore';

	// agent roster di workspace aktif (fallback: semua agen / kalau ws.agentIds kosong)
	const rosterAgents = () => {
		const ws = $workspaceList.find((w) => w.id === $activeWorkspaceId);
		if (!ws) return $agentList;
		const ids = ws.agentIds ?? [];
		if (ids.length === 0) return $agentList;
		return ids
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

	// role lookup tidak dipakai lagi — semua agent = ⚙️ WORKER (local bots)
</script>

<aside class="roster-panel">
	<!-- Token Savings / Server Stats (Item 15) -->
	<div class="ts-panel">
		<strong class="ts-title">⚡ Token Savings</strong>
		<div class="ts-row">
			<span>Total Tokens Saved</span>
			<span class="ts-val">{($costAudit.totalTokensSaved / 1000).toFixed(1)}k</span>
		</div>
		<div class="ts-row">
			<span>Pruning Ratio</span>
			<span class="ts-val ts-ratio">{$costAudit.lastPruneRatioPct}%</span>
		</div>
		<div class="ts-row">
			<span>Cost Saved</span>
			<span class="ts-val ts-cost">${$costAudit.totalCostSavedUsd.toFixed(4)}</span>
		</div>
		<div class="ts-bar">
			<div class="ts-bar-fill" style="width:{Math.min(100, $costAudit.lastPruneRatioPct)}%"></div>
		</div>
	</div>

	<div class="rp-header">
		<strong>🤖 Local Bots</strong>
		<span class="rp-count">{rosterAgents().length} on-duty</span>
	</div>
	<ul class="rp-list">
		{#each rosterAgents() as agent (agent.id)}
			<li class="rp-item">
				<span class="rp-dot" style={`background:${statusDot(agent.status)}`}></span>
				<span class="rp-info">
					<span class="rp-name">{agent.name}</span>
					<span class="rp-badge">🤖 Local (Ollama)</span>
					<span class="rp-sub">{agent.status} · {agent.provider ?? 'ollama'}</span>
				</span>
				<span class="rp-role">
					<span class="rp-role-badge worker">⚙️ WORKER</span>
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
	}
	/* token savings panel */
	.ts-panel {
		background: #2b2d31;
		border-radius: 8px;
		padding: 10px 12px;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	.ts-title {
		color: #f0b232;
		font-size: 12px;
		margin-bottom: 2px;
	}
	.ts-row {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		color: #949ba4;
	}
	.ts-val {
		color: #dbdee1;
		font-weight: 700;
	}
	.ts-ratio {
		color: #23a55a;
	}
	.ts-cost {
		color: #f0b232;
	}
	.ts-bar {
		height: 6px;
		background: #313338;
		border-radius: 3px;
		overflow: hidden;
		margin-top: 2px;
	}
	.ts-bar-fill {
		height: 100%;
		background: #23a55a;
		border-radius: 3px;
		transition: width 0.4s;
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
	.rp-badge {
		font-size: 10px;
		font-weight: 700;
		color: #23a55a;
		background: rgba(35, 165, 90, 0.12);
		border-radius: 4px;
		padding: 1px 5px;
		align-self: flex-start;
		margin-top: 2px;
	}
	.rp-role-badge {
		font-size: 10px;
		font-weight: 800;
		border-radius: 4px;
		padding: 2px 6px;
		white-space: nowrap;
	}
	.rp-role-badge.leader {
		color: #f0b232;
		background: rgba(240, 178, 50, 0.15);
	}
	.rp-role-badge.worker {
		color: #5865f2;
		background: rgba(88, 101, 242, 0.15);
	}
	.rp-role {
		font-size: 11px;
		white-space: nowrap;
		display: flex;
		align-items: center;
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
