const parseRule = require('./parse-rule.js');

test('parseRule converts text rule into rule object', () => {
  const input = '1-3 a';
  const expected = {
    n1: 1,
    n2: 3,
    char: 'a',
  };
  expect(parseRule(input)).toEqual(expected);
});

test('parseRule converts text rule into rule object with larger range', () => {
  const input = '12-35 z';
  const expected = {
    n1: 12,
    n2: 35,
    char: 'z',
  };
  expect(parseRule(input)).toEqual(expected);
});
