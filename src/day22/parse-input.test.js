const parseInput = require('./parse-input');

test('#parseInput returns deck arrays', () => {
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
  const expected = [
    [9, 2, 6, 3, 1],
    [5, 8, 4, 7, 10],
  ];
  expect(parseInput(input)).toEqual(expected);
});
