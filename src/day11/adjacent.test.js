const adjacent = require('./adjacent');

const seating = [
  '#.##.L#.##',
  '#L###LL.L#',
  'L.#.#..#..',
  '#L##.##.L#',
  '#.##.LL.LL',
  '#.###L#.##',
  '..#.#.....',
  '#L######L#',
  '#.LL###L.L',
  '#.#L###.##',
];

test('Returns adjacents from middle of grid', () => {
  expect(adjacent(seating, 4, 4)).toEqual(['#.#', '#L', '##L']);
});

test('Returns adjacents from top middle of grid', () => {
  expect(adjacent(seating, 0, 4)).toEqual(['#L', '##L']);
});

test('Returns adjacents from bottom middle of grid', () => {
  expect(adjacent(seating, 9, 4)).toEqual(['L##', 'L#']);
});

test('Returns adjacents from left middle of grid', () => {
  expect(adjacent(seating, 4, 0)).toEqual(['#L', '.', '#.']);
});

test('Returns adjacents from right middle of grid', () => {
  expect(adjacent(seating, 4, 9)).toEqual(['L#', 'L', '##']);
});

test('Returns adjacents from top left of grid', () => {
  expect(adjacent(seating, 0, 0)).toEqual(['.', '#L']);
});

test('Returns adjacents from top right of grid', () => {
  expect(adjacent(seating, 0, 9)).toEqual(['#', 'L#']);
});

test('Returns adjacents from bottom left of grid', () => {
  expect(adjacent(seating, 9, 0)).toEqual(['#.', '.']);
});

test('Returns adjacents from bottom right of grid', () => {
  expect(adjacent(seating, 9, 9)).toEqual(['.L', '#']);
});
