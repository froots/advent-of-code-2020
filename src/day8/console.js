const Operation = {
  NOP: Symbol('NOP'),
  ACC: Symbol('ACC'),
  JMP: Symbol('JMP'),
};

class Console {
  constructor(bootcode = []) {
    this.load(bootcode);
  }

  static parseCode(code) {
    return code.map((line) => {
      const [operation, value] = line.split(' ');
      return {
        operation: Operation[operation.toUpperCase()],
        value: Number(value),
        calls: [],
      };
    });
  }

  load(bootcode) {
    this.program = Console.parseCode(bootcode);
    this.pointer = 0;
    this.acc = 0;
    this.counter = 0;
  }

  nextInstruction() {
    const instruction = this.program[this.pointer];
    if (!instruction || instruction.calls.length >= 1) {
      return false;
    }
    return instruction;
  }

  execute(instruction) {
    switch (instruction.operation) {
      case Operation.NOP:
        this.pointer += 1;
        break;
      case Operation.ACC:
        this.acc += instruction.value;
        this.pointer += 1;
        break;
      case Operation.JMP:
        this.pointer += instruction.value;
        break;
      default:
        throw new Error('Unrecognised operation type');
    }
    instruction.calls.push(this.counter++);
  }

  run() {
    let instruction;
    while (instruction = this.nextInstruction()) {
      this.execute(instruction)
    }
    return this.acc;
  }
}

module.exports = Console;