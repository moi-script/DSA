function prim(graph, startNode) {
  const mst = [];
  const visited = new Set([startNode]);
  const edges = []; // This should be a Min-Heap/Priority Queue for efficiency

  while (visited.size < Object.keys(graph).length) {
    let minEdge = { weight: Infinity };
    
    // Check all edges connecting from visited to unvisited
    for (let u of visited) {
      for (let neighbor of graph[u]) {
        if (!visited.has(neighbor.node) && neighbor.weight < minEdge.weight) {
          minEdge = { source: u, target: neighbor.node, weight: neighbor.weight };
        }
      }
    }
    
    if (minEdge.weight !== Infinity) {
      visited.add(minEdge.target);
      mst.push(minEdge);
    }
  }
  return mst;
}