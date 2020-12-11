const compare = require('./compare');
const tick = require('./tick');
const countOccupied = require('./count-occupied');
const { visible } = require('./adjacent');

function part2(input) {
  let current = input;
  let prev;
  while (!compare(prev, current)) {
    prev = current;
    current = tick(current, visible, 5);
  }
  return countOccupied(current);
}

module.exports = part2;
