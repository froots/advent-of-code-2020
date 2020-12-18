const Cube = require('./cube');

function part1(input) {
  let cube = new Cube(input);

  while (cube.ticks < 6) {
    cube.tick();
  }

  return cube.activeCount;
}

module.exports = { part1 };
