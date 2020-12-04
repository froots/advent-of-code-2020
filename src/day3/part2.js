const slopeCount = require('./slope-count');

function part2(input) {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  return slopes
    .map(([dx, dy]) => slopeCount(input, dx, dy))
    .reduce((product, trees) => product * trees, 1);
}

module.exports = part2;
