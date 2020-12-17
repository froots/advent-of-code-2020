const parse = require('./parse');
const valid = require('./valid');

function part1(input) {
  const [rules, , nearby] = parse(input);

  return nearby
    .flat()
    .filter((n) => !valid(n, rules))
    .reduce((sum, n) => sum + n, 0);
}

module.exports = { part1 };
