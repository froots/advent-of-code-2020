function validate(rule, phrase) {
  const count = (phrase.match(new RegExp(rule.char, 'g')) || []).length;
  return count >= rule.min && count <= rule.max;
}

module.exports = validate;
