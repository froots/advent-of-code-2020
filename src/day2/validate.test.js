const { validateByCount } = require('./validate.js');

test('validates password strings against a rule', () => {
  const rule = {
    n1: 1,
    n2: 3,
    char: 'a',
  };
  const valid = ['abcde', 'bade', 'baaga', 'aaa'];
  const invalid = ['bbbbbb', '', 'aaaa', 'abababab'];

  valid.forEach((pwd) => expect(validateByCount(rule, pwd)).toBeTruthy());
  invalid.forEach((pwd) => expect(validateByCount(rule, pwd)).toBeFalsy());
});
