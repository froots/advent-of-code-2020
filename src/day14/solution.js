const Operations = require('./operations');
const { parse, executeV1, executeV2 } = require('./instruction');

function sum(a, b) {
  return a + b;
}

function run(instructions, execute) {
  const startingState = {
    memory: new Map(),
  };
  return [
    ...instructions.map(parse).reduce(execute, startingState).memory.values(),
  ].reduce(sum, 0n);
}

function part1(instructions) {
  return run(instructions, executeV1);
}

function part2(instructions) {
  return run(instructions, executeV2);
}

module.exports = { part1, part2 };
