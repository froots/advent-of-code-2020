function validate(passport) {
  const requiredKeys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  return requiredKeys.every((key) =>
    Object.prototype.hasOwnProperty.call(passport, key)
  );
}

function part1(passports) {
  return passports.filter(validate).length;
}

module.exports = part1;
