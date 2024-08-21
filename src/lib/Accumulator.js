let nodeIdCounter = 0;

export class SelectionAccumulator {
  constructor() {
    this.nodes = new Map();
    this.connections = new Map();
  }

  // Generate a new unique node ID
  generateId() {
    return (nodeIdCounter++).toString();
  }

  // Add a node and return its ID
  addNode(node) {
    const id = this.generateId();
    if (this.nodes.has(id)) {
      throw new Error(`Node with id ${id} already exists.`);
    }
    this.nodes.set(id, node);
    this.connections.set(id, new Set());
    return id; // Return the generated ID
  }

  // Connect two nodes
  connectNodes(id1, id2) {
    if (!this.nodes.has(id1) || !this.nodes.has(id2)) {
      throw new Error('Both nodes must exist to create a connection.');
    }
    this.connections.get(id1).add(id2);
    this.connections.get(id2).add(id1);
  }

  // Delete a connection between two nodes
  deleteConnection(id1, id2) {
    if (this.nodes.has(id1) && this.nodes.has(id2)) {
      this.connections.get(id1).delete(id2);
      this.connections.get(id2).delete(id1);
    }
  }

  // Get all nodes
  getNodes() {
    return Array.from(this.nodes.entries());
  }

  // Get all connections
  getConnections() {
    return Array.from(this.connections.entries());
  }

  // Get connections for a specific node
  getConnectionsForNode(id) {
    if (!this.connections.has(id)) {
      throw new Error(`Node with id ${id} does not exist.`);
    }
    return Array.from(this.connections.get(id));
  }

  // Delete a node
  deleteNode(id) {
    if (!this.nodes.has(id)) {
      throw new Error(`Node with id ${id} does not exist.`);
    }
    this.nodes.delete(id);
    this.connections.delete(id);
    this.connections.forEach((connectedNodes) => connectedNodes.delete(id));
  }

  // Update a node
  updateNode(id, newNode) {
    if (!this.nodes.has(id)) {
      throw new Error(`Node with id ${id} does not exist.`);
    }
    this.nodes.set(id, newNode);
  }

  exportState() {
    return JSON.stringify({
      nodes: this.getNodes(),
      // Converted into an array of arrays
      // since some data gets skipped while json.stringify?
      // connections: Array.from(this.connections.entries()).map(([id, connectedNodes]) => [id, Array.from(connectedNodes)])
      connections: this.getConnections().map(([id, connectedNodes]) => [id, Array.from(connectedNodes)])
    });
  }

  importState(state) {
    // Clear existing data
    this.nodes.clear();
    this.connections.clear();

    // Import nodes
    for (const [id, node] of state.nodes) {
      this.nodes.set(id, node);
      this.connections.set(id, new Set());
    }

    // Import connections
    for (const [id, connectedNodes] of state.connections) {
      const connectionSet = this.connections.get(id);
      if (Array.isArray(connectedNodes)) {
        for (const connectedId of connectedNodes) {
          if (this.connections.has(connectedId)) {
            this.connections.get(connectedId).add(id);
            connectionSet.add(connectedId);
          }
        }
      } else {
        console.warn(`Invalid format for connections of node ${id}:`, connectedNodes);
      }
    }
  }
}
