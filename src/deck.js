const { prototypeData } = require('./data');
const { createCard, evaluateGuess } = require('./card');

function createDeck(arr) {
  return {
    cards: arr,
  };
}

function countCards(arr) {
  return arr.cards.length === 0 ? 'This deck is empty!' : arr.cards.length;
}

module.exports = {
  createDeck,
  countCards,
};
