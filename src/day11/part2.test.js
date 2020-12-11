const part2 = require('./part2');

test('11.2 counts number of seats after patterns stabilizes with alternative visibility rules', () => {
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
  expect(part2(input)).toBe(26);
});
