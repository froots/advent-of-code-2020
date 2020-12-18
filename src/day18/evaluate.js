function addition(a, b) {
  return a + b;
}

function multiplication(a, b) {
  return a * b;
}

function evaluate(expression) {
  let term;
  let operation;

  for (let c of expression.replace(/ /g, '').split('')) {
    if (c.match(/\d/)) {
      if (operation) {
        term = operation(term, Number(c));
        operation = null;
        continue;
      } else {
        term = Number(c);
      }
    }

    if (c === '+') {
      operation = addition;
      continue;
    }

    if (c === '*') {
      operation = multiplication;
      continue;
    }
  }

  return term;
}

module.exports = evaluate;
