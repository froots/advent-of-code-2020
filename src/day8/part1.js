const Console = require('./console');

function part1(bootCode) {
  let con = new Console(bootCode);
  return con.run();
}

module.exports = part1;