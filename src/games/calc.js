import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const mission = 'What is the result of the expression?';

const operators = {
  0: ['+', (a, b) => a + b],
  1: ['-', (a, b) => a - b],
  2: ['*', (a, b) => a * b],
};

const getOperation = () => {
  const propertyNumber = [0, 2];
  const codOperator = getRandomNumber(...propertyNumber);
  return operators[codOperator];
};

const getDataForGame = () => {
  const limitationOfGeneratedNumbers = [0, 500];
  const number1 = getRandomNumber(...limitationOfGeneratedNumbers);
  const number2 = getRandomNumber(...limitationOfGeneratedNumbers);
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
