function part1(input, dx, dy) {
  // Parse input to binary matrix?
  // Iterator to visit matrix according to x and y values and count trees
  const h = input.length;
  const w = input[0].length;

  let x = 0;
  let y = 0;
  let trees = 0;

  while (y <= h - 1) {
    y += dy;
    x += dx;
    if (x > w - 1) {
      x -= w;
    }
    if (input[y] && input[y].charAt(x) === '#') {
      trees += 1;
    }
  }

  return trees;
}

module.exports = part1;
