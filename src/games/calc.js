import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const description = 'What is the result of the expression?';

const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getDataForGame = () => {
  const number1 = getRandomNumber(0, 500);
  const number2 = getRandomNumber(0, 500);
  const operators = Object.keys(calculator);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const answer = String(calculator[operator](number1, number2));
  const question = `${number1} ${operator} ${number2}`;
  return {
    question,
    answer,
  };
};

export default () => playGame(
  description,
  getDataForGame,
);
