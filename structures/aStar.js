function aStar(start, goal) {
  let openSet = [start]; // Nodes to be evaluated
  let closedSet = new Set(); // Nodes already evaluated

  while (openSet.length > 0) {
    // 1. Find node in openSet with the lowest fScore
    let current = openSet.reduce((prev, curr) => prev.f < curr.f ? prev : curr);

    if (current === goal) return reconstructPath(current);

    // 2. Move current from open to closed
    openSet = openSet.filter(node => node !== current);
    closedSet.add(current);

    for (let neighbor of current.neighbors) {
      if (closedSet.has(neighbor)) continue;

      // gScore is the cost from start to neighbor
      let tentativeGScore = current.g + distance(current, neighbor);

      if (!openSet.includes(neighbor)) {
        openSet.push(neighbor);
      } else if (tentativeGScore >= neighbor.g) {
        continue; // Not a better path
      }

      // 3. This path is the best so far, record it!
      neighbor.parent = current;
      neighbor.g = tentativeGScore;
      neighbor.h = heuristic(neighbor, goal);
      neighbor.f = neighbor.g + neighbor.h;
    }
  }
  return null; // No path found
}