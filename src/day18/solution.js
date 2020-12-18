const evaluate = require('./evaluate');

function sum(a, b) {
  return a + b;
}

function part1(input) {
  return input.map((expression) => evaluate(expression)[0]).reduce(sum, 0);
}

module.exports = { part1 };
