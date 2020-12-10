const part2 = require('./part2');

test('Calculates total number of adapter arrangements', () => {
  const input = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];
  expect(part2(input)).toBe(8);
});

test('Calculates total number of adapter arrangements for a larger input set', () => {
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
  expect(part2(input)).toBe(19208);
});
