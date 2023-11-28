const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('createCard', function () {
  it('should be a function', function () {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      'What allows you to define a set of related information using key-value pairs?'
    );
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });

  it('should have an id that is a number', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    expect(typeof card.id).to.equal('number');
  });

  it('should have at least three possible answers stored in an array', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    expect(card.answers).to.be.an('array');
    expect(card.answers.length).to.be.greaterThan(2);
  });

  it('should have a string as a correct answer', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );

    expect(card.correctAnswer).to.be.an('string');
  });
});

describe('evaluateGuess', function() {
  it('should be a function', function () {
    expect(createCard).to.be.a('function');
  });

  it('should return "Correct!" if  the answer is correct', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );
    let guess = 'object'
    let correctAnswer = card.correctAnswer

    let feedback = evaluateGuess(guess, correctAnswer)

    expect(feedback).to.equal('Correct!');
  });

  it('should return "Incorrect!" if  the answer is correct', function () {
    const card = createCard(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );
    let guess = 'array'
    let correctAnswer = card.correctAnswer

    let feedback = evaluateGuess(guess, correctAnswer)

    expect(feedback).to.equal('Incorrect!');
  });
})