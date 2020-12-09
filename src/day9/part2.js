const part1 = require('./part1');

function part2(input, preambleSize) {
  const target = part1(input, preambleSize);

  for (const [i, start] of input.entries()) {
    let sum = start;
    let endIndex = i + 1;
    while (sum < target && input[endIndex]) {
      sum += input[endIndex];
      if (sum === target) {
        const sorted = input.slice(i, endIndex + 1).sort((a, b) => a - b);
        return sorted[0] + sorted[sorted.length - 1];
      }
      endIndex += 1;
    }
  }

  return 'no contiguous group sums to target';
}

module.exports = part2;
