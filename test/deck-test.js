const chai = require('chai');
const expect = chai.expect;

const { createCard, createDeck, countCards } = require('../src/card');

describe('createDeck', function () {
  it('should be a function', function () {
    expect(createDeck).to.be.a('function');
  });

  // Test that createDeck returns an object.
  it('should return an array of objects', function () {
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

    const deck = createDeck([card1, card2, card3]);

    expect(deck).to.be.an('object');
  });
});

describe('countCards', function () {
  it('should count the correct number of cards', function () {
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

    const deck1 = createDeck([card1, card2]);
    const deck2 = createDeck([card1, card2, card3]);
    const deck3 = createDeck([card1, card2, card3, card4]);

    const numDeck1 = countCards(deck1);
    const numDeck2 = countCards(deck2);
    const numDeck3 = countCards(deck3);

    expect(numDeck1).to.equal(2);
    expect(numDeck2).to.equal(3);
    expect(numDeck3).to.equal(4);
  });

  it('should let you know if the deck is empty', function () {
    const deck = createDeck([]);
    const emptyDeck = countCards(deck);

    expect(emptyDeck).to.equal('This deck is empty!');
  });
});
