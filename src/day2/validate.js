function validateByCount(rule, phrase) {
  const count = (phrase.match(new RegExp(rule.char, 'g')) || []).length;
  return count >= rule.n1 && count <= rule.n2;
}

module.exports = { validateByCount };
