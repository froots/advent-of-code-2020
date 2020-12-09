const part1 = require('./part1');

test('9.1 returns first number that is not a sum of 2 of the previous 5 numbers;', () => {
  const input = [
    35,
    20,
    15,
    25,
    47,
    40,
    62,
    55,
    65,
    95,
    102,
    117,
    150,
    182,
    127,
    219,
    299,
    277,
    309,
    576,
  ];
  expect(part1(input, 5)).toBe(127);
});
