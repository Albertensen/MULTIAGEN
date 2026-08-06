<!-- Previously: AgentStore integration only -->

<!-- Now: Full WebSocket + UI Integration -->

import { agentStore } from './agent/agentStore';
import { orchestrator, processMessage } from './orchestration';
import { chatListStore } from './chatList';

// =====================================================================
//orchestration.ts updates
// =====================================================================

// 1. WebSocket connection setup
const ws = new WebSocket('wss://localhost:8080/ws/agents');

// Listen for WebSocket events
ws.onmessage = (evt) => {
  const data = JSON.parse(evt.data);
  if (data.type === 'agent:created') {
    orchestrator.assignAgent(data.payload.id);
  }
  if (data.type === 'agent:updated') {
    agentStore.updateAgent(data.payload.id, data.payload.changes);
  }
  if (data.type === 'agent:deleted') {
    agentStore.removeAgent(data.payload.id);
  }
};

// =====================================================================
// UTEST ROUTE UPDATE (src/routes/utest.svelte)
// =====================================================================

// In utest.svelte:

<script>
  import { agentStore } from './agent/agentStore';
  import { on, busHistory } from './orchestration';

  // Connect to WebSocket from mainbrain.md orchestration
  const ws = new WebSocket('wss://localhost:8080/ws/agents');

  // UI State
  let connectionStatus = 'Connecting...';
  let agents = agentStore.get();

  // WebSocket connection status
  ws.onopen = () => {
    connectionStatus = 'Connected to backend';  // Update UI
  };

  // Event listener for real-time updates
  ws.onmessage = (evt) => {
    const data = JSON.parse(evt.data);
    agents = agentStore.get();  // Auto-update array
  };

  // Handle new incoming WebSocket messages
  on('orchestration:call', (event) => {
    // Refresh agent list when new assignments happen
    agents = agentStore.get();
  });

  // Handle agent status changes from WebSocket
  on('agent:updated', (event) => {
    agents = agentStore.get();
  });
</script>


<!-- UI Components -->
<div>
  <h3>WebSocket Status: {connectionStatus}</h3>
  <pre>{JSON.stringify(agents, null, 2)}</pre>
  <button on:click="() => fetch('http://localhost:8080/api/v1/agents', { method: 'POST' })">Create new agent</button>
</div>