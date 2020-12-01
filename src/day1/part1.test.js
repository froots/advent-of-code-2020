const part1 = require('./part1');

test('Day 1.1 finds two numbers that add to 2020 and multiplies them', () => {
  const input = [1721, 979, 366, 299, 675, 1456];
  expect(part1(input, 2020)).toBe(514579);
});
