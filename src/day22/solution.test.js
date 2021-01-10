const { part1 } = require('./solution');

test('22.1 example', () => {
  const input = `Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`;
  expect(part1(input)).toBe(306);
});
