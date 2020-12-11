const countOccupied = require('./count-occupied');
const adjacent = require('./adjacent');
const Label = require('./label');

function tick(seating) {
  return seating.map((row, y) => {
    return row
      .split('')
      .map((seat, x) => {
        switch (seat) {
          case Label.EMPTY:
            return countOccupied(adjacent(seating, y, x)) === 0
              ? Label.OCCUPIED
              : Label.EMPTY;
          case Label.OCCUPIED:
            return countOccupied(adjacent(seating, y, x)) >= 4
              ? Label.EMPTY
              : Label.OCCUPIED;
          default:
            return seat;
        }
      })
      .join('');
  });
}

module.exports = tick;
