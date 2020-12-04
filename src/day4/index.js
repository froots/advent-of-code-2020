const logTimed = require('../log-timed');
const readInput = require('../read-input');
const parseInput = require('./parse-input');
const part1 = require('./part1');
const part2 = require('./part2');

function run() {
  readInput('4', (data) => {
    const input = parseInput(data);

    logTimed('4.1', () => part1(input));
    logTimed('4.2', () => part2(input));
  });
}

module.exports = run;
