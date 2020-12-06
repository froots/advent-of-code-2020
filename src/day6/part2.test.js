const part2 = require('./part2');

test('Day 6.2 sums counts of questions answered by all group members', () => {
  const input = [
    ['abc'],
    ['a', 'b', 'c'],
    ['ab', 'ac'],
    ['a', 'a', 'a', 'a'],
    ['b']
  ];
  expect(part2(input)).toBe(6);
});