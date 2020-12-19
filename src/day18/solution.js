const { evaluateOrder } = require('./evaluate');

function sum(a, b) {
  return a + b;
}

function part1(input) {
  return input
    .map(
      (expression) => evaluateOrder(expression.replace(/ /g, '').split(''))[0]
    )
    .reduce(sum, 0);
}

function part2(input) {}

module.exports = { part1, part2 };
