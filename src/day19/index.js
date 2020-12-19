const logTimed = require('../log-timed');
const readInput = require('../read-input');
const { part1 } = require('./solution');

function run() {
  readInput('19', (data) => {
    const [rules, messages] = data.split('\n\n');
    logTimed('19.1', () => part1(rules.split('\n'), messages.split('\n')));
  });
}

module.exports = run;
