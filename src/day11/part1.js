const compare = require('./compare');
const tick = require('./tick');
const countOccupied = require('./count-occupied');
const { adjacent } = require('./adjacent');

function part1(input) {
  let current = input;
  let prev;
  while (!compare(prev, current)) {
    prev = current;
    current = tick(current, adjacent);
  }
  return countOccupied(current);
}

module.exports = part1;
