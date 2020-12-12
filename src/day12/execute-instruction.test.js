const { execute1, execute2 } = require('./execute-instruction');

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

describe('#execute2 for part2', () => {
  test('Moves the waypoint north by given amount', () => {
    const instruction = 'N5';
    const start = { waypoint: [10, 2], location: [0, 0] };
    expect(execute2(start, instruction)).toEqual({
      waypoint: [10, 7],
      location: [0, 0],
    });
  });

  test('Moves the waypoint east by given amount', () => {
    const instruction = 'E3';
    const start = { waypoint: [10, 2], location: [0, 0] };
    expect(execute2(start, instruction)).toEqual({
      waypoint: [13, 2],
      location: [0, 0],
    });
  });

  test('Moves the waypoint south by given amount', () => {
    const instruction = 'S7';
    const start = { waypoint: [10, 2], location: [0, 0] };
    expect(execute2(start, instruction)).toEqual({
      waypoint: [10, -5],
      location: [0, 0],
    });
  });

  test('Moves the waypoint west by given amount', () => {
    const instruction = 'W1';
    const start = { waypoint: [10, 2], location: [0, 0] };
    expect(execute2(start, instruction)).toEqual({
      waypoint: [9, 2],
      location: [0, 0],
    });
  });

  test('Rotates the waypoint clockwise by given degrees', () => {
    const instruction = 'R90';
    const start = { waypoint: [12, 3], location: [0, 0] };
    expect(execute2(start, instruction)).toEqual({
      waypoint: [3, -12],
      location: [0, 0],
    });
  });

  test('Rotates the waypoing anticlockwise by 270 degrees', () => {
    const instruction = 'L270';
    const start = { waypoint: [12, 3], location: [0, 0] };
    expect(execute2(start, instruction)).toEqual({
      waypoint: [3, -12],
      location: [0, 0],
    });
  });

  test('Moves the ship in the direction of the waypoint the given number of times', () => {
    const instruction = 'F3';
    const start = { waypoint: [10, 2], location: [0, 0] };
    expect(execute2(start, instruction)).toEqual({
      waypoint: [10, 2],
      location: [30, 6],
    });
  });
});
