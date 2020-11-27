jest.mock('fs');
const fs = require('fs');
const readInput = require('./read-input');

test('readInput throws error if no file exists', () => {
  fs.readFile.mockImplementation((path, cb) => cb('This is an error'));
  const mycb = jest.fn();
  expect(() => readInput(1, mycb)).toThrow(Error);
  expect(mycb).not.toHaveBeenCalled();
});
