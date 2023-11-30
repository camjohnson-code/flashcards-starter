const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');

describe('createRound', function () {
  it('should be a function', function () {
    expect(createRound).to.be.a('function');
  });

  it('should have a deck property that holds onto the deck object', function () {
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

    const deck = createDeck([card1, card2, card3, card4]);
    const newRound = createRound(deck);

    expect(newRound).to.be.a('object');
  });

  it('should have a currentCard property that is the first card in the deck', function () {
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
      12,
      "What is the name of Cameron's dog?",
      ['Lily', 'Bailey', 'Jojo'],
      'Lily'
    );

    const deck = createDeck([card1, card2, card3, card4]);
    const newRound = createRound(deck);

    expect(newRound.currentCard).to.be.a('object');
  });

  it('should have a turns property with 0 as a default', function () {
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
      12,
      "What is the name of Cameron's dog?",
      ['Lily', 'Bailey', 'Jojo'],
      'Lily'
    );

    const deck = createDeck([card1, card2, card3, card4]);
    const newRound = createRound(deck);

    expect(newRound.turns).to.equal(0);
  });

  it('should have a incorrectGuesses property that starts as an empty array', function () {
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
      12,
      "What is the name of Cameron's dog?",
      ['Lily', 'Bailey', 'Jojo'],
      'Lily'
    );

    const deck = createDeck([card1, card2, card3, card4]);
    const newRound = createRound(deck);

    expect(newRound.incorrectGuesses).to.be.a('array');
  });
});

describe('takeTurn', function () {
  it('should update the number of incorrect guesses', function () {
    const card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const card2 = createCard(
      2,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    const card3 = createCard(
      3,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );
    const card4 = createCard(
      4,
      "What is the name of Cameron's dog?",
      ['Lily', 'Bailey', 'Jojo'],
      'Lily'
    );

    const deck = createDeck([card1, card2, card3, card4]);

    const round = createRound(deck);

    const guess = 'sea otter';
    takeTurn(guess, round);

    const guess2 = 'William';
    takeTurn(guess2, round);

    const guess3 = 'spleen';
    takeTurn(guess3, round);

    const guess4 = 'Lily';
    takeTurn(guess4, round);

    expect(round.incorrectGuesses.length).to.equal(2);
  });

  it('should increase the turns each round', function () {
    const card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const card2 = createCard(
      2,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    const card3 = createCard(
      3,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );
    const card4 = createCard(
      4,
      "What is the name of Cameron's dog?",
      ['Lily', 'Bailey', 'Jojo'],
      'Lily'
    );

    const deck = createDeck([card1, card2, card3, card4]);

    const round = createRound(deck);

    const guess = 'sea otter';
    takeTurn(guess, round);

    expect(round.turns).to.equal(1);
  });

  it('should switch to the next card in the deck', function () {
    const card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const card2 = createCard(
      2,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    const card3 = createCard(
      3,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );
    const card4 = createCard(
      4,
      "What is the name of Cameron's dog?",
      ['Lily', 'Bailey', 'Jojo'],
      'Lily'
    );

    const deck = createDeck([card1, card2, card3, card4]);

    const round = createRound(deck);

    const guess = 'sea otter';
    takeTurn(guess, round);

    expect(round.currentCard).to.equal(round.deck[round.turns]);
  });
});

describe('calculatePercentCorrect', function () {
  it('should correctly calculate a percentage', function () {
    const card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const card2 = createCard(
      2,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    const card3 = createCard(
      3,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );
    const card4 = createCard(
      4,
      "What is the name of Cameron's dog?",
      ['Lily', 'Bailey', 'Jojo'],
      'Lily'
    );

    const deck = createDeck([card1, card2, card3, card4]);

    const round = createRound(deck);

    const guess = 'sea otter';
    takeTurn(guess, round);

    const guess2 = 'gallbladder';
    takeTurn(guess2, round);

    const guess3 = 'William';
    takeTurn(guess3, round);

    const guess4 = 'Bailey';
    takeTurn(guess4, round);

    expect(calculatePercentCorrect(round)).to.equal(50);
  });
});

describe('endRound', function () {
  it('should tell the player their percentage', function () {
    const card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ['sea otter', 'pug', 'capybara'],
      'sea otter'
    );
    const card2 = createCard(
      2,
      'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'],
      'gallbladder'
    );
    const card3 = createCard(
      3,
      "What is Travis's middle name?",
      ['Lex', 'William', 'Fitzgerald'],
      'Fitzgerald'
    );
    const card4 = createCard(
      4,
      "What is the name of Cameron's dog?",
      ['Lily', 'Bailey', 'Jojo'],
      'Lily'
    );

    const deck = createDeck([card1, card2, card3, card4]);

    const round = createRound(deck);

    const guess = 'sea otter';
    takeTurn(guess, round);

    const guess2 = 'gallbladder';
    takeTurn(guess2, round);

    const guess3 = 'William';
    takeTurn(guess3, round);

    const guess4 = 'Bailey';
    takeTurn(guess4, round);

    expect(endRound(round)).to.equal(
      '** Round over! ** You answered 50% of the questions correctly!'
    );
  });
});
