const Console = require('./console');

function part1(bootCode) {
  const con = new Console(bootCode);
  return con.run()[0];
}

module.exports = part1;