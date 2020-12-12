const manhattan = require('./manhattan');

test('Calculates manhattan distances from coordinates array', () => {
  expect(manhattan([0, 0])).toBe(0);
  expect(manhattan([1, 0])).toBe(1);
  expect(manhattan([2, -1])).toBe(3);
  expect(manhattan([-5, -7])).toBe(12);
});
