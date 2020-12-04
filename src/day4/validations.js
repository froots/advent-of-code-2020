function validateRange(value, lower, upper) {
  return value >= lower && value <= upper;
}

function validateByr(byr) {
  return validateRange(byr, 1920, 2002);
}

function validateIyr(iyr) {
  return validateRange(iyr, 2010, 2020);
}

function validateEyr(eyr) {
  return validateRange(eyr, 2020, 2030);
}

function validateHgt(hgt) {
  const matches = hgt.match(/^(?<value>\d+)(?<units>in|cm)$/);
  if (!matches) {
    return false;
  }
  if (matches.groups.units === 'cm') {
    return validateRange(matches.groups.value, 150, 193);
  }
  return validateRange(matches.groups.value, 59, 76);
}

module.exports = { validateByr, validateIyr, validateEyr, validateHgt };
