const Cube = require('./cube');

function solve(dimensions, input) {
  let cube = new Cube(dimensions, input);

  while (cube.ticks < 6) {
    cube.tick();
  }

  return cube.activeCount;
}

function part1(input) {
  return solve(3, input);
}

function part2(input) {
  return solve(4, input);
}

module.exports = { part1, part2 };
