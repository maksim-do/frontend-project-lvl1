import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParity = (number) => !(number % 2);

const getDataForGame = () => {
  const data = getRandomNumber();
  const answer = isParity(data) ? 'yes' : 'no';
  return {
    data,
    answer,
  };
};

export default () => playGame({
  mission,
  getDataForGame,
});
