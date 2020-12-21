const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1 } = require('./solution');

function run() {
  readInput('20', (data) => {
    logTimed('20.1', () => part1(data));
  });
}

module.exports = run;
