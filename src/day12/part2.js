const manhattan = require('./manhattan');
const { execute2 } = require('./execute-instruction');

function part2(input) {
  return manhattan(
    input.reduce(execute2, { waypoint: [10, 1], location: [0, 0] }).location
  );
}

module.exports = part2;
