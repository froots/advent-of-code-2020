// Credit to this excellent explainer video on Chinese Remainder theory
// https://www.youtube.com/watch?v=zIFehsBHB8o
// Everything is coerced to BigInt because calculations go above
// Number.MAX_SAFE_INTEGER, except in the tests of course...

function modInverse(Ni, ni) {
  const multiplier = Ni % ni;
  let xi = 1n;
  while ((xi * multiplier) % ni !== 1n) {
    xi += 1n;
  }
  return xi;
}

function modProduct(ni, offset, N) {
  const bi = offset === 0n ? offset : ni - (offset % ni);
  const Ni = N / ni;
  const xi = modInverse(Ni, ni);
  return bi * Ni * xi;
}

function part2(buses) {
  let N = buses
    .filter((busId) => busId !== 'x')
    .reduce((product, busId) => product * BigInt(busId), 1n);
  return (
    buses.reduce((sum, bus, idx) => {
      if (bus === 'x') {
        return sum;
      }
      return sum + modProduct(BigInt(bus), BigInt(idx), N);
    }, 0n) % N
  );
}

module.exports = part2;
