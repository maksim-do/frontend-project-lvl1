import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  const iter = (divider) => {
    if (divider > Math.floor(Math.sqrt(number))) return true;
    if (number % divider === 0) return false;
    return iter(divider + 1);
  };
  return iter(2);
};

const getDataForGame = () => {
  const number = getRandomNumber(0, 1000);
  const answer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);
  return {
    question,
    answer,
  };
};

export default () => playGame(
  description,
  getDataForGame,
);
