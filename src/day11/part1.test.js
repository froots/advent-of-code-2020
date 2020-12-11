const part1 = require('./part1');

test('11.1 counts number of occupied seats after seating pattern stabilizes', () => {
  const input = [
    'L.LL.LL.LL',
    'LLLLLLL.LL',
    'L.L.L..L..',
    'LLLL.LL.LL',
    'L.LL.LL.LL',
    'L.LLLLL.LL',
    '..L.L.....',
    'LLLLLLLLLL',
    'L.LLLLLL.L',
    'L.LLLLL.LL',
  ];
  expect(part1(input)).toBe(37);
});
