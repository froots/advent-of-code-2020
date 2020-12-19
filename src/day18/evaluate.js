function addition(a, b) {
  return a + b;
}

function multiplication(a, b) {
  return a * b;
}

function evaluateOrder(expression) {
  let term;
  let operation;
  let c;
  let exp = expression.replace(/ /g, '');

  while ((c = exp.charAt(0))) {
    exp = exp.slice(1);

    if (c === '(') {
      if (operation) {
        let result;
        [result, exp] = evaluateOrder(exp);
        term = operation(term, result);
        operation = null;
      } else {
        [term, exp] = evaluateOrder(exp);
      }
    }

    if (c === ')') {
      return [term, exp];
    }

    if (c.match(/\d/)) {
      if (operation) {
        term = operation(term, Number(c));
        operation = null;
      } else {
        term = Number(c);
      }
    }

    if (c === '+') {
      operation = addition;
    }

    if (c === '*') {
      operation = multiplication;
    }
  }

  return [term, exp];
}

module.exports = { evaluateOrder };
