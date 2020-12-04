const validations = require('./validations.js');

test('valid byr values', () => {
  const valid = [1920, 1998, 2002];
  const invalid = [1919, 2003, 1];
  valid.forEach((v) => expect(validations.byr(v)).toBeTruthy());
  invalid.forEach((v) => expect(validations.byr(v)).toBeFalsy());
});

test('valid iyr values', () => {
  const valid = [2010, 2015, 2020];
  const invalid = [2009, 2021, 9];
  valid.forEach((v) => expect(validations.iyr(v)).toBeTruthy());
  invalid.forEach((v) => expect(validations.iyr(v)).toBeFalsy());
});

test('valid eyr values', () => {
  const valid = [2020, 2030, 2025];
  const invalid = [2019, 2031, 9];
  valid.forEach((v) => expect(validations.eyr(v)).toBeTruthy());
  invalid.forEach((v) => expect(validations.eyr(v)).toBeFalsy());
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
  valid.forEach((v) => expect(validations.hgt(v)).toBeTruthy());
  invalid.forEach((v) => expect(validations.hgt(v)).toBeFalsy());
});

test('validates hair colour', () => {
  const valid = ['#123abc', '#babf00', '#000000', '#ffffff'];
  const invalid = ['#123abz', '123abc'];
  valid.forEach((v) => expect(validations.hcl(v)).toBeTruthy());
  invalid.forEach((v) => expect(validations.hcl(v)).toBeFalsy());
});

test('validates eye colour', () => {
  const valid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  const invalid = ['aml', 'oll'];
  valid.forEach((v) => expect(validations.ecl(v)).toBeTruthy());
  invalid.forEach((v) => expect(validations.ecl(v)).toBeFalsy());
});

test('validates pid', () => {
  const valid = ['012345678', '987654321', '000000000'];
  const invalid = ['01234567', '12345678a'];
  valid.forEach((v) => expect(validations.pid(v)).toBeTruthy());
  invalid.forEach((v) => expect(validations.pid(v)).toBeFalsy());
});
