function solution(input, target) {
  const record = new Map();
  let prev = input[0];
  let index = 1;

  input.slice(1).forEach((n) => {
    record.set(prev, index);
    index += 1;
    prev = n;
  });

  while (index < target) {
    let next;
    if (record.has(prev)) {
      next = index - record.get(prev);
    }
    record.set(prev, index);
    prev = next || 0;
    index += 1;
  }

  return prev;
}

module.exports = { solution };
