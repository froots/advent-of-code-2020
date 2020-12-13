const logTimed = require('../log-timed');
const readInput = require('../read-input');
const part1 = require('./part1');

function run() {
  readInput('13', (data) => {
    const [line1, line2] = data.split('\n');
    const timestamp = parseInt(line1, 10);
    const buses = line2
      .split(',')
      .map((bus) => (bus === 'x' ? 'x' : parseInt(bus, 10)));
    logTimed('13.1', () => part1(timestamp, buses));
  });
}

module.exports = run;
