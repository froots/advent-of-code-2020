const Operation = {
  NOP: Symbol('NOP'),
  ACC: Symbol('ACC'),
  JMP: Symbol('JMP'),
};

function execute(code) {
  let pointer = 0;
  let acc = 0;
  
  while (true) {
    let instruction = code[pointer];

    if (!instruction) { // assume we've reached the end, but not necessarily
      return [acc, true];
    }

    if (instruction.called) {
      return [acc, false];
    }

    switch (instruction.operation) {
      case Operation.NOP:
        pointer += 1;
        instruction.called = true;
        break;
      case Operation.ACC:
        acc += instruction.operand;
        pointer += 1;
        instruction.called = true;
        break;
      case Operation.JMP:
        pointer += instruction.operand;
        instruction.called = true;
        break;
      default:
        throw new Error('Unrecognized instruction');
    }
  }
}

function parse(code) {
  return code.map(parseLine);
}

function parseLine(line) {
  const [operation, value] = line.split(' ');
  return {
    operation: Operation[operation.toUpperCase()],
    operand: Number(value),
    called: false
  };
}

module.exports = { execute, parse };