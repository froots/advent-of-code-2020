const part2 = require('./part2');

test('Day 3.2 returns the multiplied count of trees', () => {
  const input = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ];

  expect(part2(input)).toBe(336);
});
