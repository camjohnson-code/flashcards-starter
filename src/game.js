const data = require('./data');
const util = require('./util');
const { prototypeData } = require('./data');
const { createCard, evaluateGuess } = require('./card');
const { createDeck, countCards } = require('./deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('./round');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  const deck = createDeck(prototypeData);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
  calculatePercentCorrect(round);
  if (round.turns >= round.deck.length) console.log(endRound());
}

module.exports = {
  printMessage,
  printQuestion,
  start
};
