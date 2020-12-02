const { validateByCount, validateByPosition } = require('./validate.js');

test('validateByCount validates password strings against rule specifying min an max count of given character', () => {
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

test('validateByPosition validates password strings against rule specifying positions of given character, to a maximum of 1 match', () => {
  const rule = {
    n1: 1,
    n2: 3,
    char: 'a',
  };
  const valid = ['abcde', 'bca', 'aacaaaaa', 'a'];
  const invalid = ['bbbbbb', '', 'aaa', 'ababbbbb'];

  valid.forEach((pwd) => expect(validateByPosition(rule, pwd)).toBeTruthy());
  invalid.forEach((pwd) => expect(validateByPosition(rule, pwd)).toBeFalsy());
});
