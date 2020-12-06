function part1(input) {
  return input
    .map((group) => new Set(group.join('').split('')).size)
    .reduce((sum, current) => sum + current, 0);
}

module.exports = part1;