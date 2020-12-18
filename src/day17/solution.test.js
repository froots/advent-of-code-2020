const { part1 } = require('./solution');

test('17.1 Counts active cubes after 6 step boot cycle', () => {
  const input = ['.#.', '..#', '###'];
  expect(part1(input)).toBe(112);
});
