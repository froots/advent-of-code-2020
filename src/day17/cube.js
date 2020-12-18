const Bounds = require('./bounds.js');

class Cube {
  constructor(input) {
    this.active = new Set();
    this.ticks = 0;
    this.bounds = null;

    if (input) {
      this.init(input);
    }
  }

  init(input) {
    this.bounds = new Bounds(input[0].length, input.length, 1);

    for (let [y, row] of input.entries()) {
      for (let [x, cell] of row.split('').entries()) {
        if (cell === '#') {
          this.active.add(this.coordId(x, y, 0));
        }
      }
    }
  }

  get activeCount() {
    return this.active.size;
  }

  activeNeighboursOf([x, y, z]) {
    let activeNeighbours = 0;
    for (let zi = z - 1; zi <= z + 1; zi += 1) {
      for (let yi = y - 1; yi <= y + 1; yi += 1) {
        for (let xi = x - 1; xi <= x + 1; xi += 1) {
          if (zi === z && yi === y && xi === x) {
            continue;
          }
          activeNeighbours += this.active.has(this.coordId(xi, yi, zi));
        }
      }
    }
    return activeNeighbours;
  }

  tick() {
    const active = new Set();

    this.bounds.expand();

    this.bounds.coords.forEach((coords) => {
      const coordId = this.coordId(...coords);
      const activeNeighbours = this.activeNeighboursOf(coords);
      if (this.active.has(coordId)) {
        if (activeNeighbours === 2 || activeNeighbours === 3) {
          active.add(coordId);
        }
      } else {
        if (activeNeighbours === 3) {
          active.add(coordId);
        }
      }
    });

    this.active = active;
    this.ticks += 1;
  }

  coordId(x, y, z) {
    return [x, y, z].join(',');
  }
}

module.exports = Cube;
