const score = require('./score');

test('Calculates the score of a deck', () => {
  const deck = [3, 2, 10, 6, 8, 5, 9, 4, 7, 1];
  expect(score(deck)).toBe(306);
});
