const part1 = require('./part1');

test('12.1 calculates manhattan distance travelled according to instructions', () => {
  const input = ['F10', 'N3', 'F7', 'R90', 'F11'];
  expect(part1(input)).toBe(25);
});

test('Another 12.1 example with all instruction types', () => {
  const input = [
    'F3', // [3, 0]
    'E2', // [5, 0]
    'L90', // [5, 0]
    'F5', // [5, 5]
    'W1', // [4, 5]
    'S3', // [4, 2]
    'R180', // [4, 2]
    'E5', // [9, 2]
    'F6', // [9, -4]
    'N1', // [9, -3]
  ];
  expect(part1(input)).toBe(12);
});
