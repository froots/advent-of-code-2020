const decode = require('./decode');

function part1(seatCodes) {
  return Math.max(
    ...seatCodes
      .map(decode)
      .map(([row, col]) => row * 8 + col)
  );
}

module.exports = part1;