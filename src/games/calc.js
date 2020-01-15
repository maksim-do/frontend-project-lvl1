import getRandomNumber from '../getRandomNumber';

const mission = 'What is the result of the expression?';

const operators = {
  0: ['+', (a, b) => a + b],
  1: ['-', (a, b) => a - b],
  2: ['*', (a, b) => a * b],
};

const getOperation = () => {
  const codOperator = Math.floor(Math.random() * Math.floor(3));
  return operators[codOperator];
};

const metodPrepareData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const [operator, calculation] = getOperation();
  const data = `${number1} ${operator} ${number2}`;
  return {
    data,
    answer: `${calculation(number1, number2)}`,
  };
};

export default () => ({
  mission,
  metodPrepareData,
});