function countSharedChars(group) {
  const [first, ...rest] = group;
  const candidates = new Set(first.split(''));
  rest.forEach((questions) => {
    const qs = new Set(questions.split(''));
    candidates.forEach((candidate) => {
      if (!qs.has(candidate)) {
        candidates.delete(candidate);
      }
    });
  });
  return candidates.size;
}

function part2(input) {
  return input
    .map(countSharedChars)
    .reduce((sum, n) => sum + n, 0);
}

module.exports = part2;