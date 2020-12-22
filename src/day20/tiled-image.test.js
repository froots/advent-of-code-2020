const TiledImage = require('./tiled-image');
const testData = require('./test-data');

function byFirstValue(a, b) {
  return a[0] - b[0];
}

describe('TiledImage', () => {
  test('Parses test data', () => {
    const image = new TiledImage(testData);
    expect(image.tiles.size).toBe(9);
  });

  test('Creates borders for simple tiles', () => {
    const input = `Tile 1:
#..#
##.#
....
#...

Tile 2:
####
###.
.###
.##.`;
    const expected = [
      [0b1001, [1]], // 9
      [0b1100, [1, 2]], // 12
      [0b11, [1, 2]], // 3
      [0b1, [1]], // 1
      [0b1000, [1]], // 8
      [0b1011, [1]], // 11
      [0b1101, [1]], // 13
      [0b1111, [2]], // 15
      [0b1010, [2]], // 10
      [0b101, [2]], // 5
      [0b110, [2]], // 6
    ];
    const image = new TiledImage(input);
    const actual = image.borders();
    expect(
      [...actual.entries()]
        .sort(byFirstValue)
        .map(([border, idSet]) => [border, [...idSet].sort((a, b) => a - b)])
    ).toEqual(expected.sort(byFirstValue));
  });
});
