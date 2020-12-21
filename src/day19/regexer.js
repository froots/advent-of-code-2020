class Regexer {
  constructor(ruleInput) {
    this.rules = new Map();
    ruleInput.forEach((line) => {
      const [num, rule] = line.split(': ');
      this.rules.set(Number(num), rule);
    });
    this.cache = new Map();
  }

  make(num = 0) {
    let rule = this.rules.get(num);
    let regex;

    if (this.cache.has(rule)) {
      return this.cache.get(rule);
    }

    if (rule.match(/^"/)) {
      regex = rule.replace(/"/g, '');
    } else {
      regex =
        '(?:' +
        rule
          .split(' | ')
          .map((seq) => {
            return seq
              .split(' ')
              .map((n) => this.make(Number(n)))
              .join('');
          })
          .join('|') +
        ')';
    }

    this.cache.set(rule, regex);
    return regex;
  }

  fullRegex() {
    return new RegExp('^' + this.make() + '$');
  }
}

module.exports = Regexer;
