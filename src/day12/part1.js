const manhattan = require('./manhattan');
const executeInstruction = require('./execute-instruction');

function part1(input) {
  return manhattan(
    input.reduce(executeInstruction, { direction: [1, 0], location: [0, 0] })
      .location
  );
}

module.exports = part1;
