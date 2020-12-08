const Console = require('./console');

let con;

beforeEach(() => {
  con = new Console();
})

test('Parses and loads provided bootcode', () => {
  con.load([
    'nop +0',
    'acc +1',
    'jmp -2',
  ]);
  expect(con.program.length).toBe(3);
});

test('Runs a simple noop program and returns starting accumulator value', () => {
  con.load(['nop +0']);
  expect(con.run()).toBe(0);
});

test('Runs a single acc program and returns new accumulator value', () => {
  con.load(['acc +3']);
  expect(con.run()).toBe(3);
});

test('Runs a simple jmp program in an infinite loop and returns starting accumulator value', () => {
  con.load(['nop +0', 'jmp -1']);
  expect(con.run()).toBe(0);
});

test('Runs a simple program without a loop', () => {
  con.load(['nop +0', 'acc +3', 'jmp +2', 'acc -1', 'acc -2']);
  expect(con.run()).toBe(1);
});

test('Runs a simple program with an infinite loop', () => {
  con.load([
    'acc +2', 
    'jmp +3', 
    'acc -1', 
    'jmp +2', 
    'jmp -2', 
    'acc +5', 
    'jmp -2'
  ])
  expect(con.run()).toBe(6);
})
