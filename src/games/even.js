import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParity = (number) => !(number % 2);

const getDataForGame = () => {
  const question = getRandomNumber();
  const answer = isParity(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

export default () => playGame({
  mission,
  getDataForGame,
});
