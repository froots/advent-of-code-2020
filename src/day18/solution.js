const { evaluateOrder, evaluatePrecedence } = require('./evaluate');

function split(exp) {
  return exp.replace(/ /g, '').split('');
}

function sum(a, b) {
  return a + b;
}

function part1(input) {
  return input.map((exp) => evaluateOrder(split(exp))[0]).reduce(sum, 0);
}

function part2(input) {
  return input.map((exp) => evaluatePrecedence(split(exp))[0]).reduce(sum, 0);
}

module.exports = { part1, part2 };
