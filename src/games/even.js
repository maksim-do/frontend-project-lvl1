import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParity = (number) => !(number % 2);

const getDataForGame = () => {
  const limitationOfGeneratedNumbers = [0, 1000];
  const question = getRandomNumber(...limitationOfGeneratedNumbers);
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
