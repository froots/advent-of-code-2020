const TiledImage = require('./tiled-image');
const testData = require('./test-data');

describe('TiledImage', () => {
  test('Parses test data', () => {
    const image = new TiledImage(testData);
    expect(image.tiles.size).toBe(9);
  });
});
