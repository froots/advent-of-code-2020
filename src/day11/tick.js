const countOccupied = require('./count-occupied');
const Label = require('./label');

function tick(seating, visibilityFn) {
  return seating.map((row, y) => {
    return row
      .split('')
      .map((seat, x) => {
        switch (seat) {
          case Label.EMPTY:
            return countOccupied(visibilityFn(seating, y, x)) === 0
              ? Label.OCCUPIED
              : Label.EMPTY;
          case Label.OCCUPIED:
            return countOccupied(visibilityFn(seating, y, x)) >= 4
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
