const { part1 } = require('./solution');
const testData = require('./test-data');

describe('20.1', () => {
  test('Solves for part 1 example', () => {
    expect(part1(testData)).toBe(20899048083289);
  });
});
