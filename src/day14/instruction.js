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

function setMaskV1(state, mask) {
  return {
    mask,
    maskOn: BigInt(`0b${mask.replace(/X/g, '0')}`),
    maskOff: BigInt(`0b${mask.replace(/X/g, '1')}`),
    memory: state.memory,
  };
}

function writeV1(state, address, value) {
  state.memory.set(address, (value | state.maskOn) & state.maskOff);
  return { ...state };
}

function executeV1(state, { operation, args }) {
  switch (operation) {
    case Operations.SET_MASK:
      return setMaskV1(state, args[0], args[1]);
    case Operations.WRITE:
      return writeV1(state, args[0], args[1]);
    default:
      throw new Error('Unknown operation');
  }
}

function setMaskV2(state, rawMask) {
  const floating = [
    ...rawMask.split('').reverse().join('').matchAll(/X/g),
  ].map(({ index }) => BigInt(2 ** index));
  const mask = BigInt(`0b${rawMask.replace(/X/g, '0')}`);

  return {
    rawMask,
    mask,
    floating,
    floatingTotal: floating.reduce(sum, 0n),
    memory: state.memory,
  };
}

function writeV2(state, address, value) {
  const base = (state.mask | address) & ~state.floatingTotal;
  const permutations = Array.from(
    Array(2 ** state.floating.length).keys()
  ).map((n) =>
    n.toString(2).padStart(state.floating.length, '0').split('').map(BigInt)
  );
  const masks = permutations.map((perm) =>
    perm.map((bit, i) => bit * state.floating[i]).reduce(sum)
  );
  masks.forEach((mask) => {
    state.memory.set(base | mask, value);
  });
  return { ...state };
}

function executeV2(state, { operation, args }) {
  switch (operation) {
    case Operations.SET_MASK:
      return setMaskV2(state, args[0]);
    case Operations.WRITE:
      return writeV2(state, args[0], args[1]);
    default:
      throw new Error('Unrecognised operation');
  }
}

module.exports = { parse, executeV1, executeV2 };
