<script>
  import { setContext } from 'svelte';
  import NewNodeForm from './forms/newNodeForm.svelte';
  import UpdateNodeForm from './forms/updateNodeForm.svelte';
  import { SelectionAccumulator } from './lib/Accumulator.js';

  // components
  import Tabular from './components/table.svelte';

  const accumulator = new SelectionAccumulator();
  let nodes = [];
  let highlightedNodeId = null;
  let selectedNodeId = null;

  setContext('node', { addNode, updateNode });

  function toggleNodeControls(id) {
    if (selectedNodeId === id) {
      selectedNodeId = null;
      highlightedNodeId = null;
    } else {
      selectedNodeId = id;
      highlightedNodeId = id;
    }
  }

  function addNode(name) {
    if (name) {
      const id = accumulator.addNode(name);
      
      getAllNodes();
    }
  }

  function updateNode( data) {
    accumulator.updateNode(selectedNode.id, data);

    getAllNodes();
  }

  function deleteNode(id) {
    accumulator.deleteNode(id);
    
    getAllNodes();
    if (selectedNode.id === id) {
      selectedNode = null;
    }
  }

  function getAllNodes() {
    nodes = accumulator.getNodes();
  }

  function toggleNodeConnection(targetNodeId) {
    event.stopPropagation();
    if (selectedNode.id && selectedNode.id !== targetNodeId) {
      if (getConnections(selectedNode.id).includes(targetNodeId)) {
        deleteConnection(selectedNode.id, targetNodeId);
      } else {
        accumulator.connectNodes(selectedNode.id, targetNodeId);
      }
      
      getAllNodes();
    }
  }

  function deleteConnection(id1, id2) {
    accumulator.deleteConnection(id1, id2);
  }

  function getConnections(nodeId) {
    return accumulator.getConnectionsForNode(nodeId);
  }

  function copyToClipboard() {
    const state = {
      nodes: Array.from(accumulator.nodes.entries()),
    };
    navigator.clipboard.writeText(JSON.stringify(consoleNodes, null, 2))
    .then(() => {
      alert('State copied to clipboard!');
    })
    .catch(err => {
      alert('Failed to copy: ' + err);
    });
  }

  $: displayNodes = nodes.map(([id, node]) => ({
    id,
    ...node,
    connections: getConnections(id),
  }));

  $: highlightMap = new Map(nodes.map(([id]) => [
    id,
    getConnections(id).includes(highlightedNodeId) ? 'highlight' : ''
  ]));

  $: linkState = (id) => {
    return getConnections(selectedNode.id).includes(id) ? 'unlink' : 'link';
  };

  $: consoleNodes = Array.from(displayNodes);

  // Compute the selected node details
  $: selectedNode = displayNodes.find(n => n.id === selectedNodeId);

  function handleMouseEnter(id) {
    if (selectedNodeId) return;
    highlightedNodeId = id;
  }

  function handleMouseLeave() {
    if (selectedNodeId) return;
    highlightedNodeId = null;
  }

  // Add event listeners to the window for drag and drop
  window.addEventListener('dragover', handleDragOver);
  window.addEventListener('drop', handleFileDrop);

  function handleDragOver(event) {
    // Prevent file from being opened in browser
    event.preventDefault();
  }

  function handleFileDrop(event) {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const state = JSON.parse(e.target.result);

        accumulator.importState(state);
        nodes = accumulator.getNodes();

        console.log('Imported Nodes:', accumulator.getNodes());
        console.log('Imported Connections:', accumulator.getConnections());
      } catch (error) {
        console.error('Error importing state:', error);
      }
    };
    reader.readAsText(file);
  }

  function handleFileExport() {
    const state = accumulator.exportState();
    const blob = new Blob([state], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element to trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'accumulator-state.json';
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
</script>
<div class="container">
  <header>
    <div class="menu">
      <ul>
        <li on:click={copyToClipboard}>
          <i class="bi bi-clipboard-check"></i>
          Clipboard
        </li>
        <li on:click={handleFileExport}>
          <i class="bi bi-download"></i>
          Download
        </li>
      </ul>
    </div>
    <div class="info">Drag file for import</div>
  </header>

  <!-- Display Section -->
  <div class="display">
    <h1>Nodes</h1>
    <!-- <button on:click={handleImport}>import</button> -->
    <div class="list">
    {#each displayNodes as { id, name }}
      <div
        class="node {highlightMap.get(id)} {selectedNodeId === id ? 'selected' : ''}"
        on:keyup={() => toggleNodeControls(id)}
        on:click={() => toggleNodeControls(id)}
        on:mouseenter={() => handleMouseEnter(id)}
        on:mouseleave={handleMouseLeave}
        role="button"
        aria-label={`Node ${id}: ${name}`} tabindex="0">
        <i>(ID: {id})</i>
        <br>
        <strong>{name}</strong>
        <br>
        {#if selectedNode && selectedNode.id !== id}
        <button class="link-button {linkState(id)}" on:click={() => toggleNodeConnection(id)} >
          <i class={`bi ${linkState(id) === 'link' ? 'bi-node-plus' : 'bi-node-minus'}`}></i>
        </button>
        {/if}
      </div>
    {/each}
    </div>
  </div>

  <!-- Console Section -->
  <div class="console">
    {#if selectedNode}
    <Tabular node={selectedNode}/>
    {:else}
    <h2>Node information</h2>
    {/if}
  </div>

  <!-- Sidepanel Section -->
  <div class="sidepanel">
  {#if selectedNode}
    <h1>Edit Node</h1>
    {#key selectedNodeId}
    <button on:click={deleteNode(selectedNode.id)}>
      <i class="bi bi-x-lg"></i>
      Delete Node
    </button>
    <UpdateNodeForm propValue={selectedNode}/>
    {/key}
    <h2>Connections</h2>
    {#each getConnections(selectedNode.id) as id}
    <div class="connection">
      Node {id}
    </div>
    {/each}
  {:else}
    <h1>Add Node</h1>
    <NewNodeForm />
  {/if}
  </div>
</div>