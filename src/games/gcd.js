import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const mission = 'Find the greatest common divisor of given numbers';

const getDivizor = (number1, number2) => {
  if (number1 === number2) return number1;
  const [dividend, divider] = number1 > number2 ? [number1, number2] : [number2, number1];
  const remainder = dividend % divider;
  if (!remainder) return divider;
  return getDivizor(divider, remainder);
};

const getDataForGame = () => {
  const limitationOfGeneratedNumbers = [0, 100];
  const number1 = getRandomNumber(...limitationOfGeneratedNumbers);
  const number2 = getRandomNumber(...limitationOfGeneratedNumbers);
  const question = `${number1} ${number2}`;
  return {
    question,
    answer: `${getDivizor(number1, number2)}`,
  };
};

export default () => playGame({
  mission,
  getDataForGame,
});
