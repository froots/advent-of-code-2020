const Cube = require('./cube');

describe('3 dimensional', () => {
  test('Empty cube constructor', () => {
    const cube = new Cube(3);
    expect(cube.activeCount).toBe(0);
    expect(cube.ticks).toBe(0);
    expect(cube.bounds).toBeNull();
  });

  test('Cube constructor with input', () => {
    const input = ['.#.', '..#', '###'];
    const cube = new Cube(3, input);
    expect(cube.ticks).toBe(0);
    expect(cube.bounds.dimensions).toEqual([3, 3, 1]);
    expect(cube.activeCount).toBe(5);
  });

  test('Cube after one tick', () => {
    const input = ['.#.', '..#', '###'];
    const cube = new Cube(3, input);
    cube.tick();
    expect(cube.ticks).toBe(1);
    expect(cube.bounds.dimensions).toEqual([5, 5, 3]);
    expect(cube.activeCount).toBe(11);
  });

  test('Cube after two ticks', () => {
    const input = ['.#.', '..#', '###'];
    const cube = new Cube(3, input);
    cube.tick();
    cube.tick();
    expect(cube.ticks).toBe(2);
    expect(cube.bounds.dimensions).toEqual([7, 7, 5]);
    expect(cube.activeCount).toBe(21);
  });

  test('Cube after three ticks', () => {
    const input = ['.#.', '..#', '###'];
    const cube = new Cube(3, input);
    cube.tick();
    cube.tick();
    cube.tick();
    expect(cube.ticks).toBe(3);
    expect(cube.bounds.dimensions).toEqual([9, 9, 7]);
    expect(cube.activeCount).toBe(38);
  });
});

describe('4 dimensional', () => {
  test('Empty cube constructor', () => {
    const cube = new Cube(4);
    expect(cube.activeCount).toBe(0);
    expect(cube.ticks).toBe(0);
    expect(cube.bounds).toBeNull();
  });

  test('Cube constructor with input', () => {
    const input = ['.#.', '..#', '###'];
    const cube = new Cube(4, input);
    expect(cube.ticks).toBe(0);
    expect(cube.bounds.dimensions).toEqual([3, 3, 1, 1]);
    expect(cube.activeCount).toBe(5);
  });

  test('Cube after one tick', () => {
    const input = ['.#.', '..#', '###'];
    const cube = new Cube(4, input);
    cube.tick();
    expect(cube.ticks).toBe(1);
    expect(cube.bounds.dimensions).toEqual([5, 5, 3, 3]);
    expect(cube.activeCount).toBe(29);
  });

  test('Cube after two ticks', () => {
    const input = ['.#.', '..#', '###'];
    const cube = new Cube(4, input);
    cube.tick();
    cube.tick();
    expect(cube.ticks).toBe(2);
    expect(cube.bounds.dimensions).toEqual([7, 7, 5, 5]);
    expect(cube.activeCount).toBe(60);
  });
});
