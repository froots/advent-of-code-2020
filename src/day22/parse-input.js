function parseInput(data) {
  return data
    .split('\n\n')
    .map((playerData) => playerData.split('\n').slice(1).map(Number));
}

module.exports = parseInput;
