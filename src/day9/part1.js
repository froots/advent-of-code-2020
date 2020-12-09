const permute = require('../permute');

function part1(input, preambleSize) {
  return input.find(noPrecedingSumPair(preambleSize));
}

function noPrecedingSumPair(preambleSize) {
  // return true from this function if there are no pairs in the preceding
  // preambleSize items that sum to n
  return function (n, i, list) {
    if (i < preambleSize) {
      return false;
    }
    const pairs = permute(list.slice(i - preambleSize, i));
    return !pairs.find(([a, b]) => a + b === n);
  };
}

module.exports = part1;
