const Operations = require('./operations');

function sum(a, b) {
  return a + b;
}

function parse(line) {
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

function executeV1(state, { operation, args }) {
  switch (operation) {
    case Operations.SET_MASK:
      return {
        mask: args[0],
        maskOn: BigInt(`0b${args[0].replace(/X/g, '0')}`),
        maskOff: BigInt(`0b${args[0].replace(/X/g, '1')}`),
        memory: state.memory,
      };
    case Operations.WRITE:
      state.memory.set(args[0], (args[1] | state.maskOn) & state.maskOff);
      return { ...state };
    default:
      throw new Error('Unknown operation');
  }
}

function executeV2(state, { operation, args }) {
  switch (operation) {
    case Operations.SET_MASK:
      const floating = [
        ...args[0].split('').reverse().join('').matchAll(/X/g),
      ].map(({ index }) => BigInt(2 ** index));
      const mask = BigInt(`0b${args[0].replace(/X/g, '0')}`);

      return {
        rawMask: args[0],
        mask,
        floating,
        floatingTotal: floating.reduce(sum, 0n),
        memory: state.memory,
      };
    case Operations.WRITE:
      const base = (state.mask | args[0]) & ~state.floatingTotal;
      const permutations = Array.from(
        Array(2 ** state.floating.length).keys()
      ).map((n) =>
        n.toString(2).padStart(state.floating.length, '0').split('').map(BigInt)
      );
      const masks = permutations.map((perm) =>
        perm.map((bit, i) => bit * state.floating[i]).reduce(sum)
      );
      masks.forEach((mask) => {
        state.memory.set(base | mask, args[1]);
      });
      return { ...state };
    default:
      throw new Error('Unrecognised operation');
  }
}

module.exports = { parse, executeV1, executeV2 };
