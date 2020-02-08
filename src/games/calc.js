import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const mission = 'What is the result of the expression?';

const minValueNumber = 0;
const maxValueNumber = 500;

const operators = {
  0: ['+', (a, b) => a + b],
  1: ['-', (a, b) => a - b],
  2: ['*', (a, b) => a * b],
};

const minValueProperty = 0;
const maxValueProperty = Object.keys(operators).length - 1;

const getOperation = () => {
  const codOperator = getRandomNumber(minValueProperty, maxValueProperty);
  return operators[codOperator];
};

const getDataForGame = () => {
  const number1 = getRandomNumber(minValueNumber, maxValueNumber);
  const number2 = getRandomNumber(minValueNumber, maxValueNumber);
  const [operator, getCalculation] = getOperation();
  const question = `${number1} ${operator} ${number2}`;
  return {
    question,
    answer: String(getCalculation(number1, number2)),
  };
};

export default () => playGame(
  mission,
  getDataForGame,
);
