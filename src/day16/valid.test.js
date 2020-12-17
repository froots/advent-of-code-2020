const valid = require('./valid');

test('Validates values against a single range', () => {
  const rules = new Map();
  rules.set('a', [[1, 3]]);
  expect(valid(1, rules)).toBeTruthy();
  expect(valid(3, rules)).toBeTruthy();
  expect(valid(0, rules)).toBeFalsy();
  expect(valid(4, rules)).toBeFalsy();
});

test('Validates values against multiple ranges', () => {
  const rules = new Map();
  rules.set('a', [
    [4, 7],
    [10, 12],
  ]);
  rules.set('b', [
    [14, 18],
    [24, 29],
  ]);
  expect(valid(10, rules)).toBeTruthy();
  expect(valid(12, rules)).toBeTruthy();
  expect(valid(13, rules)).toBeFalsy();
  expect(valid(29, rules)).toBeTruthy();
  expect(valid(30, rules)).toBeFalsy();
});
