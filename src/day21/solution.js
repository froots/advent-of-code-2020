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

function part1(input) {
  const foods = input.map(parse);
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

  const matches = new Map();

  while (true) {
    const singleIngredientMatch = [...candidates.entries()].find(
      ([_, ingredients]) => ingredients.size === 1
    );

    if (!singleIngredientMatch) {
      break;
    }

    let [matchingAllergen, matchingIngredient] = singleIngredientMatch;
    matchingIngredient = [...matchingIngredient][0];

    matches.set(matchingIngredient, matchingAllergen);

    candidates.delete(matchingAllergen);

    candidates.forEach((ingredients) => {
      ingredients.delete(matchingIngredient);
    });
  }

  return foods
    .flatMap(([ingredients]) => ingredients)
    .filter((ingredient) => !matches.has(ingredient)).length;
}

module.exports = { part1 };
