function part2(input) {
  const adapters = input.sort((a, b) => a - b);
  return [0, ...adapters, Math.max(...adapters) + 3]
    .map((n, i, arr) => n - arr[i - 1]) // Calculate diffs between adapters
    .filter((n) => !isNaN(n))
    .reduce(groupSingleJumps, [0]) // Size of each single-jump group
    .map(tribonacci) // Tribonacci number gives number of branches
    .reduce((product, factor) => product * factor, 1); // Multiply branch counts
}

// Could Memoize but isn't too slow with this data set
function tribonacci(n) {
  if (n < 0) {
    return 0;
  }
  if (n < 2) {
    return 1;
  }
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

function groupSingleJumps(groups, diff) {
  if (diff === 1) {
    return [groups[0] + 1, ...groups.slice(1)];
  } else if (diff === 3) {
    return [0, ...groups];
  }
}

module.exports = part2;
