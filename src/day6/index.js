const logTimed = require('../log-timed');
const readInput = require('../read-input');
const part1 = require('./part1');

function parseInput(input) {
  return input
    .split('\n\n')
    .map((group) => group.split('\n'));
}

function run() {
  readInput('6', (data) => {
    const input = parseInput(data);

    logTimed('6.1', () => part1(input));
  });
}

module.exports = run;
