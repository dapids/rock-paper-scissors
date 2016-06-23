const expect = chai.expect;
const should = chai.should();

const player1 = new AI('Bob');
const player2 = new AI('John');

describe('Game.match function', () => {
  
  it('should return -1 if one or more choices are invalid', () => {
    const game = new Game();
    expect(game.match('apple', 'paper')).to.equal(-1);
    expect(game.match('paper', 'apple')).to.equal(-1);
    expect(game.match('apple', 'apple')).to.equal(-1);
  });
  
  it('should return 0 if player1 and player2 pick the same item', () => {
    const game = new Game();
    expect(game.match('paper', 'paper')).to.equal(0);
  });
  
  it('should return 1 if player1 wins the match', () => {
    const game = new Game();
    expect(game.match('paper', 'rock')).to.equal(1);
    expect(game.match('rock', 'scissors')).to.equal(1);
    expect(game.match('scissors', 'paper')).to.equal(1);
  });
  
  it('should return 2 if player2 wins the match', () => {
    const game = new Game();
    expect(game.match('rock', 'paper')).to.equal(2);
    expect(game.match('scissors', 'rock')).to.equal(2);
    expect(game.match('paper', 'scissors')).to.equal(2);
  });
});
