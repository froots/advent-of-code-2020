const part1 = require('./part1');

test('10.1 returns number of 1-jolt diffs multiplied by number of 3-jolt diffs', () => {
  const input = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];
  expect(part1(input)).toBe(35);
});

test('10.1 with larger example', () => {
  const input = [
    28,
    33,
    18,
    42,
    31,
    14,
    46,
    20,
    48,
    47,
    24,
    23,
    49,
    45,
    19,
    38,
    39,
    11,
    1,
    32,
    25,
    35,
    8,
    17,
    7,
    9,
    4,
    2,
    34,
    10,
    3,
  ];
  expect(part1(input)).toBe(220);
});
