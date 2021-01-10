const parseInput = require('./parse-input');
const score = require('./score');

function part1(input) {
  let [deck1, deck2] = parseInput(input);

  while (deck1.length > 0 && deck2.length > 0) {
    let card1 = deck1.shift();
    let card2 = deck2.shift();

    if (card1 > card2) {
      deck1 = [...deck1, card1, card2];
    } else {
      deck2 = [...deck2, card2, card1];
    }
  }

  return deck1.length > 0 ? score(deck1) : score(deck2);
}

module.exports = { part1 };
