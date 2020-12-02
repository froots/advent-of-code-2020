const parseRule = require('./parse-rule.js');
const { validateByPosition } = require('./validate.js');

function part1(input) {
  return input
    .map((entry) => entry.split(':'))
    .filter(([rule, password]) =>
      validateByPosition(parseRule(rule), password.trim()),
    ).length;
}

module.exports = part1;
