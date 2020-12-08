const { execute, parse } = require('./console');

test('Runs a simple noop program and returns starting accumulator value and successful execution', () => {
  const code = ['nop +0'];
  expect(execute(parse(code))).toEqual([0, true]);
});

test('Runs a single acc program and returns new accumulator value and successful execution', () => {
  const code = ['acc +3'];
  expect(execute(parse(code))).toEqual([3, true]);
});

test('Runs a simple jmp program in an infinite loop and returns starting accumulator value and unsuccessful execution', () => {
  const code = ['nop +0', 'jmp -1'];
  expect(execute(parse(code))).toEqual([0, false]);
});

test('Runs a simple program without a loop', () => {
  const code = ['nop +0', 'acc +3', 'jmp +2', 'acc -1', 'acc -2'];
  expect(execute(parse(code))).toEqual([1, true]);
});

test('Runs a simple program with an infinite loop', () => {
  const code = [
    'acc +2', 
    'jmp +3', 
    'acc -1', 
    'jmp +2', 
    'jmp -2', 
    'acc +5', 
    'jmp -2'
  ];
  expect(execute(parse(code))).toEqual([6, false]);
})
