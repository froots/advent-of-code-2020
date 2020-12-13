const part1 = require('./part1');

test('13.1 calculates earliest bus and multiplies its id by number of minutes waiting time', () => {
  const timestamp = 939;
  const buses = [7, 13, 'x', 'x', 59, 'x', 31, 19];
  expect(part1(timestamp, buses)).toBe(295);
});
