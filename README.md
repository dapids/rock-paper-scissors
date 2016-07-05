# VanillaJS Rock-Paper-Scissors

## Create a new user
```
const david = new User('David');
```

## Create a new AI player
```
const bob = new AI('Bob');
```

## Create a new game
```
const game = new Game(david, bob, 5);
```

The following configurations are accepted:
* AI vs AI
* User vs User
* User vs AI

The 3rd parameter is the number of matches of which the game is made. if no number is specified, 3 will be the fallback choice.

## Start a game
```
game.start();
```

## Tests
Tests run by default. Tests are implemented with mocha + chai.
