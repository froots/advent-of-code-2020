const Bounds = require('./bounds.js');

class Cube {
  constructor(dimensions = 3, input) {
    this.dimensions = dimensions;
    this.active = new Set();
    this.ticks = 0;
    this.bounds = null;

    if (input) {
      this.init(dimensions, input);
    }
  }

  init(dimensions, input) {
    this.bounds = new Bounds(dimensions, [input[0].length, input.length]);

    for (let [y, row] of input.entries()) {
      for (let [x, cell] of row.split('').entries()) {
        if (cell === '#') {
          this.active.add(this.coordId([x, y]));
        }
      }
    }
  }

  get activeCount() {
    return this.active.size;
  }

  activeNeighboursOf(coords) {
    let neighbourBounds = new Bounds(
      this.dimensions,
      Array(this.dimensions).fill(3),
      coords.map((val) => val - 1)
    );
    let neighbours = neighbourBounds
      .coords()
      .filter((nCoords) => nCoords.some((val, i) => val !== coords[i]));

    return neighbours.filter((neighbour) =>
      this.active.has(this.coordId(neighbour))
    ).length;
  }

  tick() {
    const active = new Set();

    this.bounds.expand();

    this.bounds.coords().forEach((coords) => {
      const coordId = this.coordId(coords);
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

  coordId(coords) {
    return Array(this.dimensions)
      .fill(0)
      .map((n, i) => coords[i] || n)
      .join(',');
  }
}

module.exports = Cube;
