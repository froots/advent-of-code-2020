const Label = require('./label');

function countOccupied(seating) {
  return (seating.join('').match(new RegExp(Label.OCCUPIED, 'g')) || []).length;
}

module.exports = countOccupied;
