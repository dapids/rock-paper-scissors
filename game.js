class Game {
  constructor (player1, player2, matchesNumber = 3) {
    this.player1 = player1;
    this.player2 = player2;
    this.matchesNumber = matchesNumber;
    
    this.choices = ['paper', 'scissors', 'rock'];
    
    this.cheatsheet = {};
    this.choices.forEach((choice, i) => {
      this.cheatsheet[choice] = {};
      this.cheatsheet[choice][choice] = 'tie';
      this.cheatsheet[choice][this.choices[(i+1) % 3]] = this.choices[(i+1) % 3];
      this.cheatsheet[choice][this.choices[(i+2) % 3]] = choice;
    });
  }
  
  end() {
    this.log('Game is over.', 'h2');
    this.log(`${this.player1.name} scored ${this.player1.points}.`);
    this.log(`${this.player2.name} scored ${this.player2.points}.`);
    this.player1.points = 0;
    this.player2.points = 0;
  }
  
  log(text, tag = 'div') {
    document.getElementById('logs').innerHTML += `<${tag}>${text}</${tag}>`;
  }
  
  match(choice1, choice2) {
    const result = ((this.cheatsheet[choice1] || {})[choice2] || 'invalid');
    if (result === 'invalid') return -1;
    if (result === 'tie') return 0;
    return (result === choice1) ? 1 : 2;
  }
  
  start() {
    document.getElementById('logs').innerHTML = '';
    this.log('Game starts...', 'h2');
    
    for (let i = this.matchesNumber; i > 0 && i >= Math.abs(this.player1.points - this.player2.points); i--) {
      const match = this.matchesNumber - i + 1;
      this.log(`Match #${match}`, 'h3');
      
      const p1Choice = this.player1.choose(this.choices);
      const p2Choice = this.player2.choose(this.choices);
      this.log(`${this.player1.name} picks ${p1Choice}`);
      this.log(`${this.player2.name} picks ${p2Choice}`);
      
      const result = game.match(p1Choice, p2Choice);
      
      switch(result) {
        case 0:
          this.log('It\'s a tie!');
          break;
          
        case 1:
          this.player1.points += 1;
          this.log(`${this.player1.name} wins this one!`);
          break;
          
        case 2:
          this.player2.points += 1;
          this.log(`${this.player2.name} wins this one!`);
          break;
          
        default:
          this.log('The match was invalid.');
          break;
      }
    }
    
    this.end();
  }
}
