const { execute1 } = require('./execute-instruction');

describe('#execute1 for part 1', () => {
  test('moves forward by given amount', () => {
    const instruction = 'F10';
    const start = { direction: [1, 0], location: [0, 0] };
    expect(execute1(start, instruction)).toEqual({
      direction: [1, 0],
      location: [10, 0],
    });
  });

  test('moves north by given distance', () => {
    const instruction = 'N4';
    const start = { direction: [1, 0], location: [0, 0] };
    expect(execute1(start, instruction)).toEqual({
      direction: [1, 0],
      location: [0, 4],
    });
  });

  test('moves south by given distance', () => {
    const instruction = 'S12';
    const start = { direction: [1, 0], location: [0, 0] };
    expect(execute1(start, instruction)).toEqual({
      direction: [1, 0],
      location: [0, -12],
    });
  });

  test('moves east by given distance', () => {
    const instruction = 'E3';
    const start = { direction: [1, 0], location: [0, 0] };
    expect(execute1(start, instruction)).toEqual({
      direction: [1, 0],
      location: [3, 0],
    });
  });

  test('moves west by given distance', () => {
    const instruction = 'W7';
    const start = { direction: [1, 0], location: [0, 0] };
    expect(execute1(start, instruction)).toEqual({
      direction: [1, 0],
      location: [-7, 0],
    });
  });

  test('turns left by 90 degrees', () => {
    const instruction = 'L90';
    const start = { direction: [1, 0], location: [0, 0] };
    expect(execute1(start, instruction)).toEqual({
      direction: [0, 1],
      location: [0, 0],
    });
  });

  test('turns left by 180 degress', () => {
    const instruction = 'L180';
    const start = { direction: [1, 0], location: [0, 0] };
    expect(execute1(start, instruction)).toEqual({
      direction: [-1, 0],
      location: [0, 0],
    });
  });

  test('turns left by 270 degress', () => {
    const instruction = 'L270';
    const start = { direction: [1, 0], location: [0, 0] };
    expect(execute1(start, instruction)).toEqual({
      direction: [0, -1],
      location: [0, 0],
    });
  });

  test('turns right by 90 degrees', () => {
    const instruction = 'R90';
    const start = { direction: [1, 0], location: [0, 0] };
    expect(execute1(start, instruction)).toEqual({
      direction: [0, -1],
      location: [0, 0],
    });
  });

  test('turns right by 180 degrees', () => {
    const instruction = 'R180';
    const start = { direction: [1, 0], location: [0, 0] };
    expect(execute1(start, instruction)).toEqual({
      direction: [-1, 0],
      location: [0, 0],
    });
  });
});
