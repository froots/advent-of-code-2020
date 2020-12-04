const logTimed = require('../log-timed');
const readInput = require('../read-input');
const parseInput = require('./parse-input');
const part1 = require('./part1');

function run() {
  readInput('4', (data) => {
    const input = parseInput(data);

    logTimed('4.1', () => part1(input));
  });
}

module.exports = run;
