const permute = require('../permute');

function part2(input, target) {
  const [a, b, c] = permute(input, 3).find(
    ([n1, n2, n3]) => n1 + n2 + n3 === target
  );
  return a * b * c;
}

module.exports = part2;
