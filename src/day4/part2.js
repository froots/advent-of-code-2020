const validatePassport = require('./validate-passport');

function part2(passports) {
  return passports.filter(validatePassport).length;
}

module.exports = part2;
