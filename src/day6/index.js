const logTimed = require('../log-timed');
const readInput = require('../read-input');
const part1 = require('./part1');
const part2 = require('./part2');

function parseInput(input) {
  return input
    .split('\n\n')
    .map((group) => group.split('\n'));
}

function run() {
  readInput('6', (data) => {
    const input = parseInput(data);

    logTimed('6.1', () => part1(input));
    logTimed('6.2', () => part2(input));
  });
}

module.exports = run;
