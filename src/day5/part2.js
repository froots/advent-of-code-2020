const decode = require('./decode');
const convertToSeatId = require('./convert-to-seat-id');

function part2(seatCodes) {
  return seatCodes
    .map(decode)
    .map(convertToSeatId)
    .sort((a, b) => a - b)
    .find((seatId, i, seats) => i > 0 && (seatId - seats[i - 1] > 1)) - 1;
}

module.exports = part2;