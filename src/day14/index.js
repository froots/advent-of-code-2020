const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1 } = require('./solution');

function run() {
  readInput('14', (data) => {
    const input = data.split('\n').filter((line) => line);
    logTimed('14.1', () => part1(input));
  });
}

module.exports = run;