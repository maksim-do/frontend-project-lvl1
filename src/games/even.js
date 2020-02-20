import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParity = (number) => (number % 2 === 0);

const getDataForGame = () => {
  const question = getRandomNumber(0, 1000);
  const answer = isParity(question) ? 'yes' : 'no';
  return {
    question: String(question),
    answer,
  };
};

export default () => playGame(
  description,
  getDataForGame,
);
