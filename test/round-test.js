const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require('../src/round');

let deck, newRound, guess, guess2, guess3, guess4;

before(function () {
  const card1 = createCard(
    1,
    "What is Robbie's favorite animal",
    ['sea otter', 'pug', 'capybara'],
    'sea otter'
  );
  const card2 = createCard(
    14,
    'What organ is Khalid missing?',
    ['spleen', 'appendix', 'gallbladder'],
    'gallbladder'
  );
  const card3 = createCard(
    12,
    "What is Travis's middle name?",
    ['Lex', 'William', 'Fitzgerald'],
    'Fitzgerald'
  );
  const card4 = createCard(
    10,
    "What is the name of Cameron's dog?",
    ['Lily', 'Bailey', 'Jojo'],
    'Lily'
  );

  deck = createDeck([card1, card2, card3, card4]);
  newRound = createRound(deck);
  guess = 'sea otter';
  guess2 = 'William';
  guess3 = 'spleen';
  guess4 = 'Lily';
});

describe('createRound', function () {
  it('should be a function', function () {
    expect(createRound).to.be.a('function');
  });

  it('should have a deck property that holds onto the deck object', function () {
    expect(newRound).to.be.a('object');
  });

  it('should have a currentCard property that is the first card in the deck', function () {
    expect(newRound.currentCard).to.be.a('object');
  });

  it('should have a turns property with 0 as a default', function () {
    expect(newRound.turns).to.equal(0);
  });

  it('should have a incorrectGuesses property that starts as an empty array', function () {
    expect(newRound.incorrectGuesses).to.be.a('array');
  });
});

describe('takeTurn', function () {
  it('should increase the turns each round', function () {
    const round = createRound(deck);

    takeTurn(guess, round);

    expect(round.turns).to.equal(1);
  });

  it('should update the number of incorrect guesses', function () {
    const round = createRound(deck);

    takeTurn(guess, round);
    takeTurn(guess2, round);
    takeTurn(guess3, round);
    takeTurn(guess4, round);

    expect(round.incorrectGuesses.length).to.equal(2);
  });

  it('should switch to the next card in the deck', function () {
    const round = createRound(deck);

    takeTurn(guess, round);

    expect(round.currentCard).to.equal(round.deck[round.turns]);
  });
});

describe('calculatePercentCorrect', function () {
  it('should correctly calculate a percentage', function () {
    const round = createRound(deck);
    guess2 = 'gallbladder';
    guess4 = 'Bailey';

    takeTurn(guess, round);
    takeTurn(guess2, round);
    takeTurn(guess3, round);
    takeTurn(guess4, round);

    expect(calculatePercentCorrect(round)).to.equal(50);
  });
});

describe('endRound', function () {
  it('should tell the player their percentage', function () {
    const round = createRound(deck);

    takeTurn(guess, round);
    takeTurn(guess2, round);
    takeTurn(guess3, round);
    takeTurn(guess4, round);

    expect(endRound(round)).to.equal(
      '** Round over! ** You answered 50% of the questions correctly!'
    );
  });
});
