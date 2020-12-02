const validate = require('./validate.js');

test('validates password strings against a rule', () => {
  const rule = {
    min: 1,
    max: 3,
    char: 'a',
  };
  const valid = ['abcde', 'bade', 'baaga', 'aaa'];
  const invalid = ['bbbbbb', '', 'aaaa', 'abababab'];

  valid.forEach((pwd) => expect(validate(rule, pwd)).toBeTruthy());
  invalid.forEach((pwd) => expect(validate(rule, pwd)).toBeFalsy());
});
