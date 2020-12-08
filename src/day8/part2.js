const { parse, execute } = require('./console');

function part2(bootCode) {
  for (const variation of variations(bootCode)) {
    const [result, success] = execute(parse(variation));
    if (success) {
      return result;
    }
  }

  return 'No successful swap found';
}

function* variations(bootCode) {
  for (let [i, instruction] of bootCode.entries()) {
    if (/^acc/.test(instruction)) {
      continue;
    }
    let newInst = swap(instruction);
    yield [...bootCode.slice(0, i), newInst, ...bootCode.slice(i + 1)];
  }
}

function swap(instruction) {
  if (/^nop/.test(instruction)) {
    return instruction.replace('nop', 'jmp');
  } else if (/^jmp/.test(instruction)) {
    return instruction.replace('jmp', 'nop');
  }
  return instruction;
}

module.exports = part2;