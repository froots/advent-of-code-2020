const Operations = require('./operations');
const { parse, executeV1 } = require('./instruction');

function sum(a, b) {
  return a + b;
}

function run(instructions, execute) {
  const startingState = {
    maskOn: 0n,
    maskOff: 0n,
    memory: new Map(),
  };
  return [
    ...instructions.map(parse).reduce(execute, startingState).memory.values(),
  ].reduce(sum, 0n);
}

function part1(instructions) {
  return run(instructions, executeV1);
}

module.exports = { part1 };
