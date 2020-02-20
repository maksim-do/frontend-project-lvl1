import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const description = 'What is the result of the expression?';

const operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getOperation = () => {
  const properties = Object.keys(operators);
  const operator = properties[getRandomNumber(0, properties.length - 1)];
  return [operator, operators[operator]];
};

const getDataForGame = () => {
  const number1 = getRandomNumber(0, 500);
  const number2 = getRandomNumber(0, 500);
  const [operator, getCalculation] = getOperation();
  const question = `${number1} ${operator} ${number2}`;
  return {
    question,
    answer: String(getCalculation(number1, number2)),
  };
};

export default () => playGame(
  description,
  getDataForGame,
);
