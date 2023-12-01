const { prototypeData } = require('./data');

const createCard = (id, question, possibleAnswers, correctAnswer) => ({
  id,
  question,
  answers: possibleAnswers,
  correctAnswer,
});

const evaluateGuess = (guess, correctAnswer) => (guess === correctAnswer ? 'Correct!' : 'Incorrect!');

module.exports = {
  createCard,
  evaluateGuess,
};
