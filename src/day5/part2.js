const decode = require('./decode');

function part2(seatCodes) {
  return seatCodes
    .map(decode)
    .map(([row, col]) => row * 8 + col)
    .sort((a, b) => a - b)
    .find((seatId, i, seats) => i > 0 && (seatId !== seats[i-1] + 1)) - 1;
}

module.exports = part2;