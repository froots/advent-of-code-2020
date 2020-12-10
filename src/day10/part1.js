function part1(input) {
  const adapters = input.sort((a, b) => a - b);
  const counts = [0, ...adapters, Math.max(...adapters) + 3]
    .map((n, i, arr) => n - arr[i - 1])
    .filter((n) => !isNaN(n))
    .reduce(
      (counts, diff) => counts.set(diff, (counts.get(diff) || 0) + 1),
      new Map()
    );
  return (counts.get(1) || 0) * (counts.get(3) || 0);
}

module.exports = part1;
