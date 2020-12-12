function vAdd([v1x, v1y], [v2x, v2y]) {
  return [v1x + v2x, v1y + v2y];
}

function vProduct([vx, vy], p) {
  return [vx * p, vy * p];
}

module.exports = { vAdd, vProduct };
