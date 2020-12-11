function adjacent(grid, y, x) {
  let x0 = x - 1 < 0 ? 0 : x - 1;
  return [
    (grid[y - 1] || '').slice(x0, x + 2),
    `${grid[y][x - 1] || ''}${grid[y][x + 1] || ''}`,
    (grid[y + 1] || '').slice(x0, x + 2),
  ].filter((row) => row);
}

module.exports = adjacent;
