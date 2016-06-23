const pointsSymbol = Symbol();

class Player {
  constructor(name) {
    this.name = name;
    this[pointsSymbol] = 0;
  }
  
  get points() {
    return this[pointsSymbol];
  }
  
  set points(value) {
    this[pointsSymbol] = value;
  }
}

class User extends Player {
  constructor(name = 'User') {
    super(name);
  }
  
  choose(choices) {
    return prompt(`Please pick an item among: ${choices.join(', ')}.`) || 'nothing';
  }
}

class AI extends Player {
  constructor(name = 'AI') {
    super(name);
  }
  
  choose(choices) {
    const max = choices.length - 1;
    const die = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    return choices[die];
  }
}
