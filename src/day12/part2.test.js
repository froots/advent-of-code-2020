const part2 = require('./part2');

test('12.2 calculates manhattan distance travelled according to instructions with waypoint', () => {
  const input = ['F10', 'N3', 'F7', 'R90', 'F11'];
  expect(part2(input)).toBe(286);
});
