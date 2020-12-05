function convertToSeatId ([row, col]) {
  return row * 8 + col;
}

module.exports = convertToSeatId;