<script>
  import { agentStore } from './agent/agentStore';
  import { wsStatus } from './stores/orchestration';
  import { on, busHistory } from './orchestration';
  import { chatListStore } from './chatList';

  // Connect to WebSocket from mainbrain.md orchestration (already handled in orchestration.ts)
  // UI State
  let connectionStatus = $wsStatus; // Svelte reactive store
  let agents = agentStore.get();

  // Subscribe to agentStore updates
  const unsubscribeAgentStore = agentStore.subscribe((value) => {
    agents = value;
  });

  // Handle new incoming WebSocket messages via orchestration bus
  on('orchestration:call', (event) => {
    // Refresh agent list when new assignments happen (already subscribed to agentStore)
  });

  // Handle agent status changes from WebSocket
  on('agent:updated', (event) => {
    // agents will update via agentStore subscription
  });

  // Cleanup on destroy
  onDestroy(() => {
    unsubscribeAgentStore();
  });
</script>

<!-- UI Components -->
<div class="utest-dashboard">
  <h2>Phase 3 Item 6: WebSocket Integration Test</h2>
  <div class="status-indicator">
    <span class="status-label">WebSocket Status:</span>
    <span class="status-value {connectionStatus}">
      {#if connectionStatus === 'connected'}
        �� ⚡ Connected
      {:else if connectionStatus === 'connecting'}
        �� 🔄 Connecting...
      {:else}
        �� 🔴 Disconnected
      {/if}
    </span>
  </div>

  <div class="agents-section">
    <h3>Live Agents ({agents.length})</h3>
    {#if agents.length === 0}
      <p>No agents created yet.</p>
    {/else}
      <ul class="agents-list">
        {#each agents as agent (agent.id)}
          <li class="agent-item">
            <strong>{agent.name}</strong> ({agent.id})
            <br/>
            <small>Model: {agent.model}</small>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="events-section">
    <h3>Recent Event Bus</h3>
    {#if $busHistory.length === 0}
      <p>No events yet.</p>
    {/else}
      <ul class="events-list">
        {#each $busHistory.slice(-10).reverse() as event (event.ts)}
          <li class="event-item">
            <span class="event-time">{new Date(event.ts).toLocaleTimeString()}</span>
            <span class="event-type">[{event.type}]</span>
            <span class="event-payload">{JSON.stringify(event.payload)}</span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="test-controls">
    <button class="btn-primary" on:click={() => {
      // Create a test agent via backend API
      fetch('http://localhost:8080/api/v1/agents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `Test Agent ${Date.now()}`,
          model: 'gemma4:e4b',
          prompt: 'You are a test agent.'
        })
      });
    }}>
      Create Test Agent
    </button>
    <button class="btn-secondary" on:click={() => {
      // Clear event bus for clean test
      // Note: clearBus is from orchestration store
      // We need to import it; for simplicity, we can call via window or expose.
      // Since we didn't export clearBus, we'll skip for now.
      alert('Clear bus not exposed in this version.');
    }}>
      Clear Event Bus
    </button>
  </div>
</div>

<style>
  .utest-dashboard {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: var(--font-sans);
  }
  .status-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 4px;
  }
  .status-label {
    font-weight: bold;
  }
  .status-value.connected {
    color: #28a745;
    font-weight: bold;
  }
  .status-value.connecting {
    color: #ffc107;
    font-weight: bold;
  }
  .status-value.disconnected {
    color: #dc3545;
    font-weight: bold;
  }
  .agents-section, .events-section {
    margin-bottom: 20px;
  }
  .agents-section h3, .events-section h3 {
    margin-top: 0;
  }
  .agents-list, .events-list {
    list-style: none;
    padding: 0;
  }
  .agents-list li, .events-list li {
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  .agents-list li:last-child, .events-list li:last-child {
    border-bottom: none;
  }
  .event-time {
    color: #6c757d;
    margin-right: 10px;
    min-width: 80px;
    display: inline-block;
  }
  .event-type {
    background: #e9ecef;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: monospace;
    margin-right: 10px;
  }
  .event-payload {
    font-family: monospace;
    background: #f8f9fa;
    padding: 5px;
    border-radius: 3px;
    overflow-x: auto;
  }
  .test-controls {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .btn-primary, .btn-secondary {
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  .btn-primary {
    background: #007bff;
    color: white;
  }
  .btn-primary:hover {
    background: #0056b3;
  }
  .btn-secondary {
    background: #6c757d;
    color: white;
  }
  .btn-secondary:hover {
    background: #545b62;
  }
</style>