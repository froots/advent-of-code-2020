const decode = require('./decode');
const convertToSeatId = require('./convert-to-seat-id');

function part1(seatCodes) {
  return Math.max(
    ...seatCodes
      .map(decode)
      .map(convertToSeatId)
  );
}

module.exports = part1;