const Bounds = require('./bounds');

describe('Bounds in 1 dimension', () => {
  test('Create bounds in 1 dimension', () => {
    const bounds = new Bounds([3]);
    expect(bounds.ranges.length).toBe(1);
    expect(bounds.ranges[0]).toEqual([0, 3]);
  });

  test('returns correct dimensions', () => {
    const bounds = new Bounds([3]);
    expect(bounds.dimensions).toEqual([3]);
  });

  test('expands in both directions', () => {
    const bounds = new Bounds([3]);
    bounds.expand();
    expect(bounds.dimensions).toEqual([5]);
    expect(bounds.ranges[0]).toEqual([-1, 4]);
  });

  test('returns coord combinations', () => {
    const bounds = new Bounds([3]);
    expect(bounds.coords()).toEqual([[0], [1], [2]]);
  });
});

describe('Bounds in 2 dimensions', () => {
  test('returns coord combinations', () => {
    const bounds = new Bounds([3, 3]);
    expect(bounds.coords()).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ]);
  });
});

describe('Bounds in 3 dimensions', () => {
  test('Create bounds with given dimensions', () => {
    const bounds = new Bounds([3, 3, 1]);
    expect(bounds.ranges.length).toBe(3);
    expect(bounds.ranges[0]).toEqual([0, 3]);
    expect(bounds.ranges[1]).toEqual([0, 3]);
    expect(bounds.ranges[2]).toEqual([0, 1]);
  });

  test('Returns correct dimensions', () => {
    const bounds = new Bounds([3, 4, 3]);
    expect(bounds.dimensions).toEqual([3, 4, 3]);
  });

  test('expands by 1 in every direction', () => {
    const bounds = new Bounds([3, 4, 5]);
    bounds.expand();
    expect(bounds.dimensions).toEqual([5, 6, 7]);
    expect(bounds.ranges.length).toEqual(3);
    expect(bounds.ranges[0]).toEqual([-1, 4]);
    expect(bounds.ranges[1]).toEqual([-1, 5]);
    expect(bounds.ranges[2]).toEqual([-1, 6]);
  });

  test('returns all coord combos', () => {
    const bounds = new Bounds([3, 3, 2]);
    const coords = bounds.coords();
    expect(coords.length).toBe(18);
  });
});
