function parsePassportInput(passportInput) {
  const passport = Object.fromEntries(
    passportInput.split(/\s+/).map((pair) => pair.split(':'))
  );

  return {
    ...passport,
    iyr: passport.iyr && Number(passport.iyr),
    eyr: passport.eyr && Number(passport.eyr),
    byr: passport.byr && Number(passport.byr),
    hgt: passport.hgt && {
      value: Number(passport.hgt.match(/^\d+/)[0]),
      units: passport.hgt.match(/[a-z]+$/)[0],
    },
  };
}

function parseInput(input) {
  return input.split('\n\n').map(parsePassportInput);
}

module.exports = parseInput;
