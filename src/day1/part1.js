const permute = require('../permute');

function part1(input, target) {
  const [a, b] = permute(input, 2).find(([n1, n2]) => n1 + n2 === target);
  return a * b;
}

module.exports = part1;
