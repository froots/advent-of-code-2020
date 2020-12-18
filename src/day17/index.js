const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1 } = require('./solution');

function run() {
  readInput('17', (data) => {
    const input = data.split('\n');
    logTimed('17.1', () => part1(input));
  });
}

module.exports = run;
