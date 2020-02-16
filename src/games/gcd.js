import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const description = 'Find the greatest common divisor of given numbers';
const minValueNumber = 0;
const maxValueNumber = 100;

const getGCD = (number1, number2) => {
  const [dividend, divider] = number1 > number2 ? [number1, number2] : [number2, number1];
  const remainder = dividend % divider;
  if (!remainder) return divider;
  return getGCD(divider, remainder);
};

const getDataForGame = () => {
  const number1 = getRandomNumber(minValueNumber, maxValueNumber);
  const number2 = getRandomNumber(minValueNumber, maxValueNumber);
  const question = `${number1} ${number2}`;
  return {
    question,
    answer: String(getGCD(number1, number2)),
  };
};

export default () => playGame(
  description,
  getDataForGame,
);
