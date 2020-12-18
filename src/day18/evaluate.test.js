const evaluate = require('./evaluate');

test('evaluates a simple addition', () => {
  expect(evaluate('1 + 2')[0]).toBe(3);
});

test('evaluates a simple multiplication', () => {
  expect(evaluate('3 * 4')[0]).toBe(12);
});

test('evaluates a double addition', () => {
  expect(evaluate('1 + 2 + 4')[0]).toBe(7);
});

test('evaluates a double multiplication', () => {
  expect(evaluate('2 * 3 * 4')[0]).toBe(24);
});

test('evaluates addition and multiplication in correct order', () => {
  expect(evaluate('2 + 3 * 4')[0]).toBe(20);
});

test('evaluates multiplication and addition in correct order', () => {
  expect(evaluate('2 * 3 + 4')[0]).toBe(10);
});

test('evaluates parentheses first', () => {
  expect(evaluate('2 * (3 + 4)')[0]).toBe(14);
});

test('evaluates two sets of parentheses', () => {
  expect(evaluate('(2 + 7) + (3 * 2)')[0]).toBe(15);
});

test('evaluates nested parentheses', () => {
  expect(evaluate('2 * (3 + (4 * 2))')[0]).toBe(22);
});

test('examples from instructions', () => {
  expect(evaluate('1 + 2 * 3 + 4 * 5 + 6')[0]).toBe(71);
  expect(evaluate('1 + (2 * 3) + (4 * (5 + 6))')[0]).toBe(51);
  expect(evaluate('2 * 3 + (4 * 5)')[0]).toBe(26);
  expect(evaluate('5 + (8 * 3 + 9 + 3 * 4 * 3)')[0]).toBe(437);
  expect(evaluate('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))')[0]).toBe(12240);
  expect(evaluate('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2')[0]).toBe(
    13632
  );
});
