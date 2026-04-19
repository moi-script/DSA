class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a new vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge between two vertices
  addEdge(source, destination) {
    if (!this.adjacencyList.has(source)) this.addVertex(source);
    if (!this.adjacencyList.has(destination)) this.addVertex(destination);
    
    this.adjacencyList.get(source).push(destination);
    // For an undirected graph, you would also add:
    // this.adjacencyList.get(destination).push(source);
  }

  /**
   * Breadth-First Search (BFS)
   * Explores neighbors layer by layer using a Queue.
   */
  bfs(startNode) {
    const queue = [startNode];
    const visited = new Set();
    const result = [];

    visited.add(startNode);

    while (queue.length > 0) {
      const vertex = queue.shift(); // Remove the first element (FIFO)
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return result;
  }

  /**
   * Depth-First Search (DFS) - Recursive
   * Explores as deep as possible down a branch using the Call Stack.
   */
  dfsRecursive(startNode, visited = new Set(), result = []) {
    visited.add(startNode);
    result.push(startNode);

    const neighbors = this.adjacencyList.get(startNode);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsRecursive(neighbor, visited, result);
      }
    }
    return result;
  }
}


const g = new Graph();

// Setup nodes and edges
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('C', 'F');
g.addEdge('E', 'F');

console.log("BFS starting from A:", g.bfs('A'));
// Output: ["A", "B", "C", "D", "E", "F"]

console.log("DFS starting from A:", g.dfsRecursive('A'));
// Output: ["A", "B", "D", "E", "F", "C"]