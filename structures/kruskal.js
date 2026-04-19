function kruskal(numVertices, edges) {
  const mst = [];
  // 1. Sort edges by weight
  edges.sort((a, b) => a.weight - b.weight);

  const parent = Array.from({ length: numVertices }, (_, i) => i);

  function find(i) {
    if (parent[i] === i) return i;
    return parent[i] = find(parent[i]); // Path compression
  }

  function union(i, j) {
    const rootI = find(i);
    const rootJ = find(j);
    if (rootI !== rootJ) {
      parent[rootI] = rootJ;
      return true;
    }
    return false;
  }

  for (const edge of edges) {
    // 2. Add edge if it doesn't form a cycle
    if (union(edge.source, edge.target)) {
      mst.push(edge);
    }
    if (mst.length === numVertices - 1) break;
  }
  return mst;
}