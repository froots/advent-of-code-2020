class Regexer {
  constructor(rules) {
    this.rules = rules;
    this.cache = new Map();
  }

  static parseRule(rule) {
    if (rule.match(/"[ab]"/)) {
      return rule.replace(/"/g, '');
    }
    return rule.split(' | ').map((side) => side.split(' ').map(Number));
  }

  static parseRules(ruleInput) {
    const rules = new Map();
    const matcher = /^(?<num>\d+): (?<rule>.+)$/;
    for (let line of ruleInput) {
      const { num, rule } = line.match(matcher).groups;
      rules.set(parseInt(num, 10), Regexer.parseRule(rule));
    }
    return rules;
  }

  make(num = 0) {
    if (this.cache.has(num)) {
      return this.cache.get(num);
    }

    let rule = this.rules.get(num);

    if (typeof rule !== 'string') {
      rule =
        '(?:' +
        rule.map((seq) => seq.map((n) => this.make(n)).join('')).join('|') +
        ')';
    }

    this.cache.set(num, rule);
    return rule;
  }

  fullRegex() {
    return new RegExp('^' + this.make() + '$');
  }
}

module.exports = Regexer;
