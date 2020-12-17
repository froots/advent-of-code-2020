const logTimed = require('../log-timed');
const { solution } = require('./solution');

function run() {
  const input = [2, 1, 10, 11, 0, 6];
  logTimed('15.1', () => solution(input, 2020));
  logTimed('15.2', () => solution(input, 30000000));
}

module.exports = run;
