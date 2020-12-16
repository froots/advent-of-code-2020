const Operations = require('./operations');

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

function executeV2() {
  return;
}

module.exports = { parse, executeV1, executeV2 };
