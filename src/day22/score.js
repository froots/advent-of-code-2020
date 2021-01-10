function score(deck) {
  const reversed = [...deck].reverse();
  return reversed
    .map((val, i) => (i + 1) * val)
    .reduce((sum, val) => sum + val, 0);
}

module.exports = score;
