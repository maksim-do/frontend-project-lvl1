import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const description = 'Find the greatest common divisor of given numbers';
const minValueNumber = 0;
const maxValueNumber = 100;

const getDivizor = (number1, number2) => {
  if (number1 === number2) return number1;
  const [dividend, divider] = number1 > number2 ? [number1, number2] : [number2, number1];
  const remainder = dividend % divider;
  if (!remainder) return divider;
  return getDivizor(divider, remainder);
};

const getDataForGame = () => {
  const number1 = getRandomNumber(minValueNumber, maxValueNumber);
  const number2 = getRandomNumber(minValueNumber, maxValueNumber);
  const question = `${number1} ${number2}`;
  return {
    question,
    answer: String(getDivizor(number1, number2)),
  };
};

export default () => playGame(
  description,
  getDataForGame,
);
