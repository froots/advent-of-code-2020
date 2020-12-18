const { part1, part2 } = require('./solution');

test('17.1 Counts active cubes after 6 step boot cycle', () => {
  const input = ['.#.', '..#', '###'];
  expect(part1(input)).toBe(112);
});

test('17.2 Counts active hypercubes are 6 step boot cycle', () => {
  const input = ['.#.', '..#', '###'];
  expect(part2(input)).toBe(848);
});
