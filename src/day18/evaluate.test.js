const { evaluateOrder, evaluatePrecedence } = require('./evaluate');

function split(exp) {
  return exp.replace(/ /g, '').split('');
}

describe('evaluateOrder', () => {
  test('evaluates a simple addition', () => {
    expect(evaluateOrder(split('1 + 2'))[0]).toBe(3);
  });

  test('evaluates a simple multiplication', () => {
    expect(evaluateOrder(split('3 * 4'))[0]).toBe(12);
  });

  test('evaluates a double addition', () => {
    expect(evaluateOrder(split('1 + 2 + 4'))[0]).toBe(7);
  });

  test('evaluates a double multiplication', () => {
    expect(evaluateOrder(split('2 * 3 * 4'))[0]).toBe(24);
  });

  test('evaluates addition and multiplication in correct order', () => {
    expect(evaluateOrder(split('2 + 3 * 4'))[0]).toBe(20);
  });

  test('evaluates multiplication and addition in correct order', () => {
    expect(evaluateOrder(split('2 * 3 + 4'))[0]).toBe(10);
  });

  test('evaluates parentheses first', () => {
    expect(evaluateOrder(split('2 * (3 + 4)'))[0]).toBe(14);
  });

  test('evaluates two sets of parentheses', () => {
    expect(evaluateOrder(split('(2 + 7) + (3 * 2)'))[0]).toBe(15);
  });

  test('evaluates nested parentheses', () => {
    expect(evaluateOrder(split('2 * (3 + (4 * 2))'))[0]).toBe(22);
  });

  test('examples from instructions', () => {
    expect(evaluateOrder(split('1 + 2 * 3 + 4 * 5 + 6'))[0]).toBe(71);
    expect(evaluateOrder(split('1 + (2 * 3) + (4 * (5 + 6))'))[0]).toBe(51);
    expect(evaluateOrder(split('2 * 3 + (4 * 5)'))[0]).toBe(26);
    expect(evaluateOrder(split('5 + (8 * 3 + 9 + 3 * 4 * 3)'))[0]).toBe(437);
    expect(
      evaluateOrder(split('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))'))[0]
    ).toBe(12240);
    expect(
      evaluateOrder(split('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2'))[0]
    ).toBe(13632);
  });
});

describe('evaluatePrecedence', () => {
  test('evaluates a simple addition', () => {
    expect(evaluatePrecedence(split('1 + 2'))[0]).toBe(3);
  });

  test('evaluates a simple multiplication', () => {
    expect(evaluatePrecedence(split('3 * 4'))[0]).toBe(12);
  });

  test('evaluates a double addition', () => {
    expect(evaluatePrecedence(split('1 + 2 + 4'))[0]).toBe(7);
  });

  test('evaluates a double multiplication', () => {
    expect(evaluatePrecedence(split('2 * 3 * 4'))[0]).toBe(24);
  });

  test('evaluates addition and multiplication in correct order', () => {
    expect(evaluatePrecedence(split('2 + 3 * 4'))[0]).toBe(20);
  });

  test('evaluates multiplication and addition in correct order', () => {
    expect(evaluatePrecedence(split('2 * 3 + 4'))[0]).toBe(14);
  });

  test('evaluates parentheses first', () => {
    expect(evaluatePrecedence(split('(2 * 3) + 4'))[0]).toBe(10);
  });

  test('evaluates two sets of parentheses', () => {
    expect(evaluatePrecedence(split('(2 + 7) + (3 * 2)'))[0]).toBe(15);
  });

  test('evaluates nested parentheses', () => {
    expect(evaluatePrecedence(split('2 * (3 + (4 * 2))'))[0]).toBe(22);
  });

  test('examples from instructions', () => {
    expect(evaluatePrecedence(split('1 + 2 * 3 + 4 * 5 + 6'))[0]).toBe(231);
    expect(evaluatePrecedence(split('1 + (2 * 3) + (4 * (5 + 6))'))[0]).toBe(
      51
    );
    expect(evaluatePrecedence(split('2 * 3 + (4 * 5)'))[0]).toBe(46);
    expect(evaluatePrecedence(split('5 + (8 * 3 + 9 + 3 * 4 * 3)'))[0]).toBe(
      1445
    );
    expect(
      evaluatePrecedence(split('5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))'))[0]
    ).toBe(669060);
    expect(
      evaluatePrecedence(
        split('((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2')
      )[0]
    ).toBe(23340);
  });
});
