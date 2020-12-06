const part1 = require('./part1');

test('6.1 takes input and returns sum of each groups answered questions', () => {
  const input = [
    ['abc'],
    ['a', 'b', 'c'],
    ['ab', 'ac'],
    ['a', 'a', 'a', 'a'],
    ['b']
  ];
  expect(part1(input)).toBe(11);
});