const manhattan = require('./manhattan');
const { execute1 } = require('./execute-instruction');

function part1(input) {
  return manhattan(
    input.reduce(execute1, { direction: [1, 0], location: [0, 0] }).location
  );
}

module.exports = part1;
