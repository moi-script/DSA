function bellmanFord(graph, numVertices, startNode) {
  const distances = {};
  const edges = [];

  // 1. Initialize distances
  for (let i = 0; i < numVertices; i++) {
    const vertex = String.fromCharCode(65 + i); // A, B, C...
    distances[vertex] = Infinity;
  }
  distances[startNode] = 0;

  // Pre-format edges from an adjacency list for easier iteration
  for (let node in graph) {
    for (let neighbor of graph[node]) {
      edges.push({ source: node, target: neighbor.node, weight: neighbor.weight });
    }
  }

  // 2. Relax edges (V - 1) times
  for (let i = 0; i < numVertices - 1; i++) {
    for (const { source, target, weight } of edges) {
      if (distances[source] !== Infinity && distances[source] + weight < distances[target]) {
        distances[target] = distances[source] + weight;
      }
    }
  }

  // 3. Check for negative cycles
  for (const { source, target, weight } of edges) {
    if (distances[source] !== Infinity && distances[source] + weight < distances[target]) {
      console.error("Graph contains a negative weight cycle!");
      return null;
    }
  }

  return distances;
}

// Example usage:
const graph = {
  'A': [{ node: 'B', weight: -1 }, { node: 'C', weight: 4 }],
  'B': [{ node: 'C', weight: 3 }, { node: 'D', weight: 2 }, { node: 'E', weight: 2 }],
  'C': [],
  'D': [{ node: 'B', weight: 1 }, { node: 'C', weight: 5 }],
  'E': [{ node: 'D', weight: -3 }]
};

console.log(bellmanFord(graph, 5, 'A'));
// Output: { A: 0, B: -1, C: 2, D: -2, E: 1 }