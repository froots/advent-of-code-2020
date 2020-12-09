const permute = require('../permute');

function part1(input, preambleSize) {
  return input.find(noPrecedingPairSumsToTarget(preambleSize));
}

function noPrecedingPairSumsToTarget(preambleSize) {
  return function (n, i, list) {
    if (i < preambleSize) {
      return false;
    }
    return !permute(list.slice(i - preambleSize, i)).find(
      ([a, b]) => a + b === n
    );
  };
}

module.exports = part1;
