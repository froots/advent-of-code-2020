const logTimed = require('../log-timed');
const { part1 } = require('./solution');

function run() {
  const input = [2, 1, 10, 11, 0, 6];
  logTimed('15.1', () => part1(input, 2020));
}

module.exports = run;
