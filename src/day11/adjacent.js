const Label = require('./label');

function adjacent(grid, y, x) {
  let x0 = x - 1 < 0 ? 0 : x - 1;
  return [
    (grid[y - 1] || '').slice(x0, x + 2),
    `${grid[y][x - 1] || ''}${grid[y][x + 1] || ''}`,
    (grid[y + 1] || '').slice(x0, x + 2),
  ].filter((row) => row);
}

function visible(grid, y, x) {
  const directions = [
    [-1, 0], // up
    [-1, 1], // up and right
    [0, 1], // right
    [1, 1], // down and right
    [1, 0], // down
    [1, -1], // down and left
    [0, -1], // left
    [-1, -1], // up and left
  ];
  return directions
    .map((direction) => {
      return firstSeat(direction, grid, y, x);
    })
    .filter((seat) => seat);
}

function firstSeat(direction, grid, y, x) {
  let [cy, cx] = vAdd(direction, [y, x]);
  let current;

  while (
    cy >= 0 &&
    cy < grid.length &&
    cx >= 0 &&
    cx < grid[0].length &&
    current !== Label.EMPTY &&
    current !== Label.OCCUPIED
  ) {
    current = grid[cy].charAt(cx);
    [cy, cx] = vAdd(direction, [cy, cx]);
  }

  return current === Label.OCCUPIED || current === Label.EMPTY
    ? current
    : false;
}

function vAdd([v1y, v1x], [v2y, v2x]) {
  return [v1y + v2y, v1x + v2x];
}

module.exports = { adjacent, visible };
