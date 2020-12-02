function validateByCount(rule, phrase) {
  const count = (phrase.match(new RegExp(rule.char, 'g')) || []).length;
  return count >= rule.n1 && count <= rule.n2;
}

function validateByPosition(rule, phrase) {
  const [c1, c2] = [phrase.charAt(rule.n1 - 1), phrase.charAt(rule.n2 - 1)];
  return (c1 === rule.char) !== (c2 === rule.char); // effectively an XOR here
}

module.exports = { validateByCount, validateByPosition };
