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



module.exports = {
  createCard,
  evaluateGuess,
};
