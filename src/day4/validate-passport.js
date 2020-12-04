const validations = require('./validations');

function validate(key, passport) {
  return passport[key] && validations[key](passport[key]);
}

function validatePassport(passport) {
  const keys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  return keys.every((k) => validate(k, passport));
}

module.exports = validatePassport;
