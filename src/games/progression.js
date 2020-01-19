import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const mission = 'What number is missing in the progression?';

const getProgression = () => {
  const start = getRandomNumber();
  const step = getRandomNumber();
  return Array(10).fill(0).map((el, index) => start + step * index);
};

const getTask = (array, index) => {
  const newArray = array.slice();
  newArray[index] = '..';
  return newArray.join();
};

const getDataForGame = () => {
  const progression = getProgression();
  const randomIndex = getRandomNumber(9);
  const answer = `${progression[randomIndex]}`;
  const question = getTask(progression, randomIndex);
  return {
    question,
    answer,
  };
};

export default () => playGame({
  mission,
  getDataForGame,
});
