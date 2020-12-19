const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1, part2 } = require('./solution');

function run() {
  readInput('18', (data) => {
    const input = data.split('\n');
    logTimed('18.1', () => part1(input));
    logTimed('18.2', () => part2(input));
  });
}

module.exports = run;
