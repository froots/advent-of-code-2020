const { part1 } = require('./solution');

test('15.1 examples', () => {
  expect(part1([0, 3, 6], 2020)).toBe(436);
  expect(part1([1, 3, 2], 2020)).toBe(1);
  expect(part1([2, 1, 3], 2020)).toBe(10);
  expect(part1([1, 2, 3], 2020)).toBe(27);
  expect(part1([2, 3, 1], 2020)).toBe(78);
  expect(part1([3, 2, 1], 2020)).toBe(438);
  expect(part1([3, 1, 2], 2020)).toBe(1836);
});
