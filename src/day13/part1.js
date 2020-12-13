function part1(timestamp, buses) {
  const runningBuses = buses.filter((bus) => bus !== 'x');
  let nextTime = timestamp;
  let nextBus = null;

  while (!(nextBus = runningBuses.find((id) => nextTime % id === 0))) {
    nextTime += 1;
  }

  return nextBus * (nextTime - timestamp);
}

module.exports = part1;
