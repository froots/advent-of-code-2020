// Credit to this excellent explainer video on Chinese Remainder theory
// https://www.youtube.com/watch?v=zIFehsBHB8o

function modInverse(Ni, ni) {
  const multiplier = Ni % ni;
  let xi = 1n;
  while (true) {
    if ((xi * multiplier) % ni === 1n) {
      return xi;
    }
    xi += 1n;
  }
}

function modProduct(ni, offset, N) {
  //   2. Set bi = bi - arrIndex
  const bi = offset === 0n ? offset : ni - (offset % ni);
  //   3. Calculate Ni (N / ni)
  const Ni = N / ni;
  //   4. Calculate xi = inverse function from Ni and ni
  const xi = modInverse(Ni, ni);
  console.log(
    `offset:${offset}, n:${ni}, b:${bi}, Ni:${Ni}, x:${xi}, prod:${
      bi * Ni * xi
    }`
  );
  //   5. Calculate product = bi . Ni . xi
  return bi * Ni * xi;
}

function part2(buses) {
  console.log([...buses.entries()]);
  let N = buses
    .filter((busId) => busId !== 'x')
    .reduce((product, busId) => product * BigInt(busId), 1n);
  console.log('N', N);
  const sumOfProducts = buses.reduce((sum, bus, idx) => {
    if (bus === 'x') {
      return sum;
    }
    return sum + modProduct(BigInt(bus), BigInt(idx), N);
  }, 0n);
  return sumOfProducts % N;
  // For each bus:
  // SumOfProducts = reduceAdd products
  // t = SumOfProducts mod N
  // return t
}

module.exports = part2;
