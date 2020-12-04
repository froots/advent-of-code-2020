function parsePassportInput(passportInput) {
  return Object.fromEntries(
    passportInput.split(/\s+/).map((pair) => pair.split(':'))
  );
}

function parseInput(input) {
  return input.split('\n\n').map(parsePassportInput);
}

module.exports = parseInput;
