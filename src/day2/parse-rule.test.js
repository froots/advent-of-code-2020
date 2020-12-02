const parseRule = require('./parse-rule.js');

test('parseRule converts text rule into rule object', () => {
  const input = '1-3 a';
  const expected = {
    min: 1,
    max: 3,
    char: 'a',
  };
  expect(parseRule(input)).toEqual(expected);
});

test('parseRule converts text rule into rule object with larger range', () => {
  const input = '12-35 z';
  const expected = {
    min: 12,
    max: 35,
    char: 'z',
  };
  expect(parseRule(input)).toEqual(expected);
});
