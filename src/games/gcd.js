import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const description = 'Find the greatest common divisor of given numbers';

const getGCD = (number1, number2) => {
  const dividend = Math.max(number1, number2);
  const divider = Math.min(number1, number2);
  const remainder = dividend % divider;
  if (!remainder) return divider;
  return getGCD(divider, remainder);
};

const getDataForGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
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
