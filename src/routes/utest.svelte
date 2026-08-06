<script>
  import { agentStore } from '$lib/stores/agent/agentStore';
  import { wsStatus, orchestrator } from '$lib/stores/orchestration';
  import { on, busHistory } from '$lib/stores/orchestration';
  import { chatListStore } from '$lib/stores/chatList';
  import { onDestroy } from 'svelte';

  // UI State
  let agents = agentStore.get();

  // Subscribe to agentStore updates
  const unsubscribeAgentStore = agentStore.subscribe((value) => {
    agents = value;
  });

  // Handle new incoming WebSocket messages via orchestration bus
  // (optional: refresh UI when events happen)
  on('orchestration:call', (event) => {
    // agents will update via agentStore subscription
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
    <span class="status-value">
      {#if $wsStatus === 'connected'}
        �� ⚡ Connected
      {:else if $wsStatus === 'connecting'}
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
      // Clear event bus (if exposed)
      // Since clearBus is not exported from the store in this version, we skip.
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
  .status-value {
    font-weight: bold;
  }
  .status-value::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 6px;
  }
  .status-value:has-text("Connected")::before {
    background: #28a745;
  }
  .status-value:has-text("Connecting")::before {
    background: #ffc107;
  }
  .status-value:has-text("Disconnected")::before {
    background: #dc3545;
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