const { prototypeData } = require('./data');
const { createCard, evaluateGuess } = require('./card');
const { createDeck, countCards } = require('./deck');

function createRound(deck) {
  return {
    deck: deck.cards,
    currentCard: deck.cards[0],
    turns: 0,
    incorrectGuesses: [],
  };
}

function takeTurn(guess, round) {
  const result = evaluateGuess(guess, round.currentCard.correctAnswer);

  if (result === 'Incorrect!')
    round.incorrectGuesses.push(round.currentCard.id);

  round.turns++;
  round.currentCard = round.deck[round.turns];

  return result;
}

function calculatePercentCorrect(round) {
  return (
    ((round.deck.length - round.incorrectGuesses.length) / round.deck.length) *
    100
  );
}

function endRound(round) {
  return `** Round over! ** You answered ${calculatePercentCorrect(
    round
  )}% of the questions correctly!`;
}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
};
