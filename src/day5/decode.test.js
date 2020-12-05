const decode = require('./decode');

test('Decodes seat code to row and column', () => {
  expect(decode('FBFBBFFRLR')).toEqual([44, 5]);
  expect(decode('BFFFBBFRRR')).toEqual([70, 7]);
  expect(decode('FFFBBBFRRR')).toEqual([14, 7]);
  expect(decode('BBFFBBFRLL')).toEqual([102, 4]);
});