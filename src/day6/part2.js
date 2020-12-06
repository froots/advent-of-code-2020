function countSharedChars(group) {
  const [first, ...rest] = group;
  return rest.reduce((common, qs) => {
    return new Set([...common].filter(q => new Set(qs.split('')).has(q)));
  }, new Set(first.split(''))).size;
}

function part2(input) {
  return input
    .map(countSharedChars)
    .reduce((sum, n) => sum + n, 0);
}

module.exports = part2;