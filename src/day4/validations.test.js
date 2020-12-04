const {
  validateByr,
  validateIyr,
  validateEyr,
  validateHgt,
  validateHcl,
} = require('./validations.js');

test('valid byr values', () => {
  const valid = [1920, 1998, 2002];
  const invalid = [1919, 2003, 1];
  valid.forEach((v) => expect(validateByr(v)).toBeTruthy());
  invalid.forEach((v) => expect(validateByr(v)).toBeFalsy());
});

test('valid iyr values', () => {
  const valid = [2010, 2015, 2020];
  const invalid = [2009, 2021, 9];
  valid.forEach((v) => expect(validateIyr(v)).toBeTruthy());
  invalid.forEach((v) => expect(validateIyr(v)).toBeFalsy());
});

test('valid eyr values', () => {
  const valid = [2020, 2030, 2025];
  const invalid = [2019, 2031, 9];
  valid.forEach((v) => expect(validateEyr(v)).toBeTruthy());
  invalid.forEach((v) => expect(validateEyr(v)).toBeFalsy());
});

test('validate heights', () => {
  const valid = ['150cm', '193cm', '59in', '76in'];
  const invalid = [
    '150',
    '193',
    'in',
    'cm',
    '150m',
    '193mm',
    '149cm',
    '194cm',
    '58in',
    '77in',
  ];
  valid.forEach((v) => expect(validateHgt(v)).toBeTruthy());
  invalid.forEach((v) => expect(validateHgt(v)).toBeFalsy());
});

test('validates hair colour', () => {
  const valid = ['#123abc', '#babf00', '#000000', '#ffffff'];
  const invalid = ['#123abz', '123abc'];
  valid.forEach((v) => expect(validateHcl(v)).toBeTruthy());
  invalid.forEach((v) => expect(validateHcl(v)).toBeFalsy());
});
