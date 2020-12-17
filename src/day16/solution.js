const parse = require('./parse');
const valid = require('./valid');
const fieldPositions = require('./field-positions');

function part1(input) {
  const [rules, , nearby] = parse(input);

  return nearby
    .flat()
    .filter((n) => !valid(n, rules))
    .reduce((sum, n) => sum + n, 0);
}

function part2(input) {
  const [rules, ticket, nearby] = parse(input);

  const validNearby = nearby.filter((values) =>
    values.every((n) => valid(n, rules))
  );

  return [...fieldPositions(rules, validNearby).entries()]
    .filter(([label]) => label.match(/^departure/))
    .map(([, pos]) => ticket[pos])
    .reduce((product, n) => product * n, 1);
}

module.exports = { part1, part2 };
