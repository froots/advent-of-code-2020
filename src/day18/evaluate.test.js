const { evaluateOrder, evaluatePrecedence } = require('./evaluate');

describe('evaluateOrder', () => {
  test('evaluates a simple addition', () => {
    expect(evaluateOrder('1 + 2')[0]).toBe(3);
  });

  test('evaluates a simple multiplication', () => {
    expect(evaluateOrder('3 * 4')[0]).toBe(12);
  });

  test('evaluates a double addition', () => {
    expect(evaluateOrder('1 + 2 + 4')[0]).toBe(7);
  });

  test('evaluates a double multiplication', () => {
    expect(evaluateOrder('2 * 3 * 4')[0]).toBe(24);
  });

  test('evaluates addition and multiplication in correct order', () => {
    expect(evaluateOrder('2 + 3 * 4')[0]).toBe(20);
  });

  test('evaluates multiplication and addition in correct order', () => {
    expect(evaluateOrder('2 * 3 + 4')[0]).toBe(10);
  });

  test('evaluates parentheses first', () => {
    expect(evaluateOrder('2 * (3 + 4)')[0]).toBe(14);
  });

  test('evaluates two sets of parentheses', () => {
    expect(evaluateOrder('(2 + 7) + (3 * 2)')[0]).toBe(15);
  });

  test('evaluates nested parentheses', () => {
    expect(evaluateOrder('2 * (3 + (4 * 2))')[0]).toBe(22);
  });

  test('examples from instructions', () => {
    expect(evaluateOrder('1 + 2 * 3 + 4 * 5 + 6')[0]).toBe(71);
    expect(evaluateOrder('1 + (2 * 3) + (4 * (5 + 6))')[0]).toBe(51);
    expect(evaluateOrder('2 * 3 + (4 * 5)')[0]).toBe(26);
    expect(evaluateOrder('5 + (8 * 3 + 9 + 3 * 4 * 3)')[0]).toBe(437);
    expect(evaluateOrder('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))')[0]).toBe(
      12240
    );
    expect(
      evaluateOrder('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2')[0]
    ).toBe(13632);
  });
});

describe('evaluatePrecedence', () => {
  test('evaluates a simple addition', () => {
    expect(evaluatePrecedence('1 + 2')[0]).toBe(3);
  });

  test('evaluates a simple multiplication', () => {
    expect(evaluatePrecedence('3 * 4')[0]).toBe(12);
  });

  test('evaluates a double addition', () => {
    expect(evaluatePrecedence('1 + 2 + 4')[0]).toBe(7);
  });

  test('evaluates a double multiplication', () => {
    expect(evaluatePrecedence('2 * 3 * 4')[0]).toBe(24);
  });

  test('evaluates addition and multiplication in correct order', () => {
    expect(evaluatePrecedence('2 + 3 * 4')[0]).toBe(20);
  });

  test('evaluates multiplication and addition in correct order', () => {
    expect(evaluatePrecedence('2 * 3 + 4')[0]).toBe(14);
  });
});
