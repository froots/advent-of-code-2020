const Cube = require('./cube');

function part1(input) {
  let cube = new Cube(3, input);

  while (cube.ticks < 6) {
    cube.tick();
  }

  return cube.activeCount;
}

function part2(input) {
  let cube = new Cube(4, input);

  while (cube.ticks < 6) {
    cube.tick();
  }

  return cube.activeCount;
}

module.exports = { part1, part2 };
