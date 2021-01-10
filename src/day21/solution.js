const { parse } = require('./parse');

function intersection(set1, set2) {
  const intersect = new Set();
  set1.forEach((item) => {
    if (set2.has(item)) {
      intersect.add(item);
    }
  });
  return intersect;
}

function identifyCandidates(foods) {
  const candidates = new Map();

  foods.forEach(([ingredients, allergens]) => {
    allergens.forEach((allergen) => {
      if (!candidates.has(allergen)) {
        candidates.set(allergen, new Set(ingredients));
      } else {
        candidates.set(
          allergen,
          intersection(candidates.get(allergen), new Set(ingredients))
        );
      }
    });
  });

  return candidates;
}

function resolveMatches(candidates) {
  const matches = new Map();
  let singleIngredientMatch;

  while (
    (singleIngredientMatch = [...candidates.entries()].find(
      ([_, ingredients]) => ingredients.size === 1
    ))
  ) {
    let [matchingAllergen, matchingIngredient] = singleIngredientMatch;
    matchingIngredient = [...matchingIngredient][0];

    matches.set(matchingIngredient, matchingAllergen);

    candidates.delete(matchingAllergen);

    candidates.forEach((ingredients) => {
      ingredients.delete(matchingIngredient);
    });
  }

  return matches;
}

function part1(input) {
  const foods = input.map(parse);
  const candidates = identifyCandidates(foods);
  const matches = resolveMatches(candidates);

  return foods
    .flatMap(([ingredients]) => ingredients)
    .filter((ingredient) => !matches.has(ingredient)).length;
}

module.exports = { part1 };
