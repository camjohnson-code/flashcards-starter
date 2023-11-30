// This is where your project starts.
const data = require('./src/data');
const prototypeQuestions = data.prototypeData;
const util = require('./src/util');
const { createCard, evaluateGuess } = require('./src/card');
const { createDeck, countCards } = require('./src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('./src/round');
const { printMessage, printQuestion, start } = require('./src/game');

// console.log('Your project is running...');
start();
