const logTimed = require('../log-timed');
const readInput = require('../read-input');
const part1 = require('./part1');
const part2 = require('./part2');

function run() {
  readInput('7', (data) => {
    const input = data.split('\n').filter((line) => line);
    logTimed('7.1', () => part1(input, 'shiny gold'));
    logTimed('7.2', () => part2(input, 'shiny gold'));
  });
}

module.exports = run;
