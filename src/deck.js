const { prototypeData } = require('./data');
const { createCard, evaluateGuess } = require('./card');

const createDeck = arr => ({ cards: arr });

const countCards = arr => arr.cards.length === 0 ? 'This deck is empty!' : arr.cards.length;

module.exports = {
  createDeck,
  countCards,
};
