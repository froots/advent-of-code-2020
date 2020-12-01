const part2 = require('./part2');

test('Day 1.2 finds three numbers that add to 2020 and multiplies them', () => {
  const input = [1721, 979, 366, 299, 675, 1456];
  expect(part2(input, 2020)).toBe(241861950);
});
