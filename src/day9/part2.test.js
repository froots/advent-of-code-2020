const part2 = require('./part2');

test('9.2 sums first and last numbers of a contiguous group that sums to number returned by part 1', () => {
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
  expect(part2(input, 5)).toBe(62);
});
