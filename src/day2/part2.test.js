const part2 = require('./part2.js');

test('2.2 returns number of valid passwords', () => {
  const input = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
  expect(part2(input)).toBe(1);
});
