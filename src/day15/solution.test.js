const { solution } = require('./solution');

test('15.1 examples', () => {
  expect(solution([0, 3, 6], 2020)).toBe(436);
  expect(solution([1, 3, 2], 2020)).toBe(1);
  expect(solution([2, 1, 3], 2020)).toBe(10);
  expect(solution([1, 2, 3], 2020)).toBe(27);
  expect(solution([2, 3, 1], 2020)).toBe(78);
  expect(solution([3, 2, 1], 2020)).toBe(438);
  expect(solution([3, 1, 2], 2020)).toBe(1836);
});

xtest('15.2 examples', () => {
  expect(solution([0, 3, 6], 30000000)).toBe(175594);
  expect(solution([1, 3, 2], 30000000)).toBe(2578);
  expect(solution([2, 1, 3], 30000000)).toBe(3544142);
  expect(solution([1, 2, 3], 30000000)).toBe(261214);
  expect(solution([2, 3, 1], 30000000)).toBe(6895259);
  expect(solution([3, 2, 1], 30000000)).toBe(18);
  expect(solution([3, 1, 2], 30000000)).toBe(362);
});
