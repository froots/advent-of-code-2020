function parsePassportInput(passportInput) {
  const passport = Object.fromEntries(
    passportInput.split(/\s+/).map((pair) => pair.split(':'))
  );

  ['iyr', 'eyr', 'byr'].forEach((k) => {
    if (passport[k]) {
      passport[k] = Number(passport[k]);
    }
  });

  if (passport.hgt) {
    const [, value, units] = passport.hgt.match(/^(\d+)(\w+)$/);
    passport.hgt = {
      value: Number(value),
      units,
    };
  }

  return passport;
}

function parseInput(input) {
  return input.split('\n\n').map(parsePassportInput);
}

module.exports = parseInput;
