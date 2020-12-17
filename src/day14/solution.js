const Operations = require('./operations');
const { parse, execute } = require('./instruction');

function sum(a, b) {
  return a + b;
}

function run(instructions, version) {
  const startingState = {
    memory: new Map(),
  };
  return [
    ...instructions
      .map(parse)
      .reduce((state, instr) => execute(version, state, instr), startingState)
      .memory.values(),
  ].reduce(sum, 0n);
}

function part1(instructions) {
  return run(instructions, 1);
}

function part2(instructions) {
  return run(instructions, 2);
}

module.exports = { part1, part2 };
