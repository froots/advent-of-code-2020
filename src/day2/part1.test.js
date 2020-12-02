const part1 = require('./part1');

test('2.1 returns number of valid passwords', () => {
  const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
  expect(part1(input)).toBe(2);
});
