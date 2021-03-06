const logTimed = require('../log-timed');
const readInput = require('../read-input');
const part1 = require('./part1');
const part2 = require('./part2');

function run() {
  readInput('9', (data) => {
    const input = data
      .split('\n')
      .filter((line) => line)
      .map((line) => Number(line));
    logTimed('9.1', () => part1(input, 25));
    logTimed('9.2', () => part2(input, 25));
  });
}

module.exports = run;
