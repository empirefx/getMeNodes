<script>
const example = {
  city: {
    name: "City Name",
    type: "city",
    resources: {
      population: 1000,
      gold: 500,
      food: 300,
      ore: 10000,
      goods: 1000,
      soldiers: 100,
      weapons: 50,
      researchPoints: 500
    },
    buildings: {
      houses: 100,
      barracks: 5,
      palace: 1,
      armory: 1
    },
    production: {
      goldPerHour: 10,
      foodPerHour: 5,
      orePerHour: 50,
      foodPerHour: 20,
      goodsPerHour: 30,
      soldiersPerHour: 10,
      weaponsPerHour: 5,
      researchPointsPerHour: 20
    },
    actions: {
      upgradeBuilding: function(buildingType) {
        console.log(`Upgrading ${buildingType}`);
      },
      recruitUnits: function(unitType, amount) {
        console.log(`Recruiting ${amount} ${unitType}`);
      },
      buildWonder: function(wonderName) {
        console.log(`Building ${wonderName}`);
      },
      declareWar: function(targetCityId) {
        console.log(`Declaring war on city ${targetCityId}`);
      },
      upgradeMine: function() {
        console.log("Upgrading mine");
      },
      assignWorker: function(workerType, amount) {
        console.log(`Assigning ${amount} ${workerType} to the mine`);
      },
      expandField: function() {
        console.log("Expanding farm field");
      },
      hireWorker: function(workerType, amount) {
        console.log(`Hiring ${amount} ${workerType}`);
      },
      buildShip: function(shipType) {
        console.log(`Building ${shipType}`);
      },
      trade: function(goodsType, amount) {
        console.log(`Trading ${amount} ${goodsType}`);
      },
      trainSoldiers: function(amount) {
        console.log(`Training ${amount} soldiers`);
      },
      stockpileWeapons: function(amount) {
        console.log(`Stockpiling ${amount} weapons`);
      },
      startResearch: function(researchTopic) {
        console.log(`Starting research on ${researchTopic}`);
      },
      upgradeLab: function() {
        console.log("Upgrading research lab");
      }
    }
  },
};
  import { setContext } from 'svelte';
  import NewNodeForm from './forms/newNodeForm.svelte';
  import UpdateNodeForm from './forms/updateNodeForm.svelte';
  import { SelectionAccumulator } from './lib/Accumulator.js';

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
      // const id = accumulator.addNode({ name: name });
      const id = accumulator.addNode(name);
      nodes = accumulator.getNodes();
    }
  }

  function updateNode(name = selectedNode.name) {
    if (name) {
      accumulator.updateNode(selectedNode.id, { name: name });
      nodes = accumulator.getNodes();
    }
  }

  function deleteNode(id) {
    accumulator.deleteNode(id);
    nodes = accumulator.getNodes();
    if (selectedNode.id === id) {
      selectedNode = null;
    }
  }

  function toggleNodeConnection(targetNodeId) {
    event.stopPropagation();
    if (selectedNode.id && selectedNode.id !== targetNodeId) {
      if (getConnections(selectedNode.id).includes(targetNodeId)) {
        deleteConnection(selectedNode.id, targetNodeId);
      } else {
        accumulator.connectNodes(selectedNode.id, targetNodeId);
      }
      // toggleNodeControls(selectedNodeId);
      // handleMouseEnter(selectedNodeId);
      
      updateNode();
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
    properties: [],
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

  //DEBUG
  $: {
    // console.log(selectedNode);
  }

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
  <!-- Console Section -->
  <div class="console">
    <h1>Output</h1>
    <button on:click={copyToClipboard}>Copy State to Clipboard</button>
    <pre>{JSON.stringify(consoleNodes, null, "\t")}</pre>
  </div>
  <!-- Display Section -->
  <div class="display">
    <h1>Nodes</h1>
    <button on:click={handleFileExport}>Export</button>
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
          {linkState(id)}
        </button>
        {/if}
      </div>
    {/each}
    </div>
  </div>
  <!-- Sidepanel Section -->
  <div class="sidepanel">
  {#if selectedNode}
    <h1>Edit Node</h1>
    {#key selectedNodeId}
    <UpdateNodeForm propValue={selectedNode.name}/>
    {/key}
    <button on:click={deleteNode(selectedNode.id)}>Delete Node</button>
    <h2>Connections</h2>
    {#each getConnections(selectedNode.id) as id}
    <div class="connection">
      Node {id}
    </div>
    {/each}
    <h2>Properties</h2>
  {:else}
    <h1>Add Node</h1>
    <NewNodeForm />
    <h2>Global Properties</h2>
  {/if}
  </div>
</div>