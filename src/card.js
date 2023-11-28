const { prototypeData } = require('./data');

function createCard(id, question, possibleAnswers, correctAnswer) {
  return {
    id: id,
    question: question,
    answers: possibleAnswers,
    correctAnswer: correctAnswer,
  };
}

function evaluateGuess(guess, correctAnswer) {
  return guess === correctAnswer ? 'Correct!' : 'Incorrect!';
}

function createDeck(arr) {
  return {
    cards: arr,
  };
}

function countCards(arr) {
  return arr.cards.length === 0 ? 'This deck is empty!' : arr.cards.length;
}

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
  return (((round.deck.length - round.incorrectGuesses.length) / round.deck.length) * 100);
}

function endRound(round) {
  return `** Round over! ** You answered ${calculatePercentCorrect(round)}% of the questions correctly!`;
}

module.exports = {
  createCard,
  evaluateGuess,
  createDeck,
  countCards,
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
};
