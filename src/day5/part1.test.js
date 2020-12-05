const part1 = require('./part1');

test('D5.1 finds highest seat ID from list of seat codes', () => {
  const input = [
    'FBFBBFFRLR',
    'BFFFBBFRRR',
    'FFFBBBFRRR',
    'BBFFBBFRLL'
  ];
  expect(part1(input)).toBe(820);
});