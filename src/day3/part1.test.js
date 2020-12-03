const part1 = require('./part1');

test('Day 3.1 returns the correct number of trees from the example layout', () => {
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

  expect(part1(input, 3, 1)).toBe(7);
});
