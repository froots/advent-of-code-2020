const evaluate = require('./evaluate');

test('evaluates a simple addition', () => {
  expect(evaluate('1 + 2')).toBe(3);
});

test('evaluates a simple multiplication', () => {
  expect(evaluate('3 * 4')).toBe(12);
});

test('evaluates a double addition', () => {
  expect(evaluate('1 + 2 + 4')).toBe(7);
});

test('evaluates a double multiplication', () => {
  expect(evaluate('2 * 3 * 4')).toBe(24);
});

test('evaluates addition and multiplication in correct order', () => {
  expect(evaluate('2 + 3 * 4')).toBe(20);
});

test('evaluates multiplication and addition in correct order', () => {
  expect(evaluate('2 * 3 + 4')).toBe(10);
});
