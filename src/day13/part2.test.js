const part2 = require('./part2');
test('13.2 featured example', () => {
  const input = [7, 13, 'x', 'x', 59, 'x', 31, 19];
  expect(part2(input)).toBe(1068781n);
});

test('13.2 first example', () => {
  const input = [17, 'x', 13, 19];
  expect(part2(input)).toBe(3417n);
});

test('13.2 second example', () => {
  const input = [67, 7, 59, 61];
  expect(part2(input)).toBe(754018n);
});

test('13.2 third example', () => {
  const input = [67, 'x', 7, 59, 61];
  expect(part2(input)).toBe(779210n);
});

test('13.2 fourth example', () => {
  const input = [67, 7, 'x', 59, 61];
  expect(part2(input)).toBe(1261476n);
});

test('13.2 fifth example', () => {
  const input = [1789, 37, 47, 1889];
  expect(part2(input)).toBe(1202161486n);
});
