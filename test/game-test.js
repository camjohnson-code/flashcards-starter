const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round');
const { printMessage, printQuestion } = require('../src/game');

describe('printMessage', function () {
  it('should be a function', function () {
    expect(printMessage).to.be.a('function');
  });
});

describe('printQuestion', function () {
    it('should be a function', function () {
      expect(printQuestion).to.be.a('function');
    });
  });