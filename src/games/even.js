import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';
const minValueNumber = 0;
const maxValueNumber = 1000;

const isParity = (number) => (number % 2 === 0);

const getDataForGame = () => {
  const question = getRandomNumber(minValueNumber, maxValueNumber);
  const answer = isParity(question) ? 'yes' : 'no';
  return {
    question: String(question),
    answer,
  };
};

export default () => playGame(
  mission,
  getDataForGame,
);
