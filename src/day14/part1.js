Operations = {
  SET_MASK: 'mask',
  WRITE: 'mem',
};

function parseInstruction(line) {
  const maskMatcher = /^mask = ([01X]{36})$/;
  const memMatcher = /^mem\[(\d+)\] = (\d+)$/;

  if (maskMatcher.test(line)) {
    return {
      operation: Operations.SET_MASK,
      args: line.match(maskMatcher).slice(1),
    };
  } else if (memMatcher.test(line)) {
    return {
      operation: Operations.WRITE,
      args: line.match(memMatcher).slice(1).map(BigInt),
    };
  } else {
    throw new Error('Unrecognised instruction');
  }
}

function runInstruction({ maskOn, maskOff, memory }, { operation, args }) {
  switch (operation) {
    case Operations.SET_MASK:
      return {
        maskOn: BigInt(`0b${args[0].replace(/X/g, '0')}`),
        maskOff: BigInt(`0b${args[0].replace(/X/g, '1')}`),
        memory,
      };
    case Operations.WRITE:
      memory.set(args[0], (args[1] | maskOn) & maskOff);
      return { maskOn, maskOff, memory };
    default:
      throw new Error('Unknown operation');
  }
}

function part1(lines) {
  return [
    ...lines
      .map(parseInstruction)
      .reduce(runInstruction, {
        maskOn: 0n,
        maskOff: 0n,
        memory: new Map(),
      })
      .memory.values(),
  ].reduce((sum, val) => sum + val, 0n);
}

module.exports = part1;
