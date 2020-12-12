const { vAdd, vProduct } = require('../vector');

const Actions = {
  NORTH: 'N',
  SOUTH: 'S',
  EAST: 'E',
  WEST: 'W',
  FORWARD: 'F',
  LEFT: 'L',
  RIGHT: 'R',
};

const Directions = {
  [Actions.NORTH]: [0, 1],
  [Actions.SOUTH]: [0, -1],
  [Actions.EAST]: [1, 0],
  [Actions.WEST]: [-1, 0],
};

function turn([x, y], direction) {
  if (direction === Actions.LEFT) {
    return [-y || 0, x];
  } else {
    return [y, -x || 0];
  }
}

function rotate([x, y], direction, degrees) {
  const turns = degrees / 90;
  let result = [x, y];
  for (let t = 0; t < turns; t += 1) {
    result = turn(result, direction);
  }
  return result;
}

function execute1(state, instruction) {
  const action = instruction.slice(0, 1);
  const value = Number(instruction.slice(1));

  switch (action) {
    case Actions.NORTH:
    case Actions.SOUTH:
    case Actions.EAST:
    case Actions.WEST:
      return {
        direction: state.direction,
        location: vAdd(state.location, vProduct(Directions[action], value)),
      };
    case Actions.LEFT:
    case Actions.RIGHT:
      return {
        direction: rotate(state.direction, action, value),
        location: state.location,
      };
    case Actions.FORWARD:
      return {
        direction: state.direction,
        location: vAdd(state.location, vProduct(state.direction, value)),
      };
  }
}

function execute2(state, instruction) {
  const action = instruction.slice(0, 1);
  const value = Number(instruction.slice(1));

  switch (action) {
    case Actions.NORTH:
    case Actions.EAST:
    case Actions.SOUTH:
    case Actions.WEST:
      return {
        waypoint: vAdd(state.waypoint, vProduct(Directions[action], value)),
        location: state.location,
      };
    case Actions.RIGHT:
    case Actions.LEFT:
      return {
        waypoint: rotate(state.waypoint, action, value),
        location: state.location,
      };
    case Actions.FORWARD:
      return {
        waypoint: state.waypoint,
        location: vAdd(state.location, vProduct(state.waypoint, value)),
      };
  }
}

module.exports = { execute1, execute2 };
