const countOccupied = require('./count-occupied');

test('Counts the number of occupied seats', () => {
  const input = [
    '#.#L.L#.##',
    '#LLL#LL.L#',
    'L.#.L..#..',
    '#L##.##.L#',
    '#.#L.LL.LL',
    '#.#L#L#.##',
    '..L.L.....',
    '#L#L##L#L#',
    '#.LLLLLL.L',
    '#.#L#L#.##',
  ];
  expect(countOccupied(input)).toBe(37);
});

test('Counts zero occupied seats', () => {
  const input = ['.L.', 'LLL', '...'];
  expect(countOccupied(input)).toBe(0);
});
