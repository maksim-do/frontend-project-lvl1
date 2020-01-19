import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const mission = 'What is the result of the expression?';

const operators = {
  0: ['+', (a, b) => a + b],
  1: ['-', (a, b) => a - b],
  2: ['*', (a, b) => a * b],
};

const getOperation = () => {
  const codOperator = getRandomNumber(2);
  return operators[codOperator];
};

const getDataForGame = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const [operator, getCalculation] = getOperation();
  const question = `${number1} ${operator} ${number2}`;
  return {
    question,
    answer: `${getCalculation(number1, number2)}`,
  };
};

export default () => playGame({
  mission,
  getDataForGame,
});
