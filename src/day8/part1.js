const { execute, parse } = require('./console');

function part1(bootCode) {
  return execute(parse(bootCode))[0];
}

module.exports = part1;