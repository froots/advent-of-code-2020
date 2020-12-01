const permute = require('./permute');

test('permute with zero size returns empty array', () => {
  const input = [];
  expect(permute(input, 0)).toEqual([]);
});

test('permute with size one and empty items returns empty array', () => {
  const input = [];
  expect(permute(input, 1)).toEqual([]);
});

test('permute with size one and one item returns permutation', () => {
  const input = [1];
  expect(permute(input, 1)).toEqual([[1]]);
});

test('permute with size one and three items returns permutations', () => {
  const input = [1, 2, 3];
  expect(permute(input, 1)).toEqual([[1], [2], [3]]);
});

test('permute with size two and one item returns empty', () => {
  const input = [1];
  expect(permute(input)).toEqual([]);
});

test('permute with size two and two items returns one permutation', () => {
  const input = [1, 2];
  expect(permute(input)).toEqual([[1, 2]]);
});

test('permute with size two and three items returns three permutations', () => {
  const input = [1, 2, 3];
  expect(permute(input)).toEqual([
    [1, 2],
    [1, 3],
    [2, 3],
  ]);
});

test('permute with size three and three items returns one permutation', () => {
  const input = [1, 2, 3];
  const actual = permute(input, 3);
  expect(actual).toEqual([[1, 2, 3]]);
});

test('permute with size three and four items returns permutations', () => {
  const input = [1, 2, 3, 4];
  const actual = permute(input, 3);
  expect(actual).toEqual([
    [1, 2, 3],
    [1, 2, 4],
    [1, 3, 4],
    [2, 3, 4],
  ]);
});

test('permute with size three and five items returns permutations', () => {
  const input = [1, 2, 3, 4, 5];
  const actual = permute(input, 3);
  expect(actual).toEqual([
    [1, 2, 3],
    [1, 2, 4],
    [1, 2, 5],
    [1, 3, 4],
    [1, 3, 5],
    [1, 4, 5],
    [2, 3, 4],
    [2, 3, 5],
    [2, 4, 5],
    [3, 4, 5],
  ]);
});

test('permute with size four and five items returns permutations', () => {
  const input = [1, 2, 3, 4, 5];
  const actual = permute(input, 4);
  expect(actual).toEqual([
    [1, 2, 3, 4],
    [1, 2, 3, 5],
    [1, 2, 4, 5],
    [1, 3, 4, 5],
    [2, 3, 4, 5],
  ]);
});
