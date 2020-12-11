const compare = require('./compare');
const tick = require('./tick');
const countOccupied = require('./count-occupied');

function part1(input) {
  let current = input;
  let prev;
  while (!compare(prev, current)) {
    prev = current;
    current = tick(current);
  }
  return countOccupied(current);
}

module.exports = part1;
