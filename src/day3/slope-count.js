function slopeCount(layout, dx, dy) {
  const h = layout.length;
  const w = layout[0].length;

  let x = 0;
  let y = 0;
  let trees = 0;

  while (y <= h - 1) {
    y += dy;
    x += dx;
    if (x > w - 1) {
      x -= w;
    }
    if (layout[y] && layout[y].charAt(x) === '#') {
      trees += 1;
    }
  }

  return trees;
}

module.exports = slopeCount;
