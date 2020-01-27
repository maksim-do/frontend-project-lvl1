import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const mission = 'What number is missing in the progression?';
const lengthSquence = 10;

const getProgression = () => {
  const limitationOfGeneratedNumbers = [0, 1000];
  const start = getRandomNumber(...limitationOfGeneratedNumbers);
  const step = getRandomNumber(...limitationOfGeneratedNumbers);
  return Array(lengthSquence).fill(0).map((el, index) => start + step * index);
};

const getTask = (array, index) => {
  const newArray = array.slice();
  newArray[index] = '..';
  return newArray.join();
};

const getDataForGame = () => {
  const indexNumber = [0, lengthSquence - 1];
  const progression = getProgression();
  const randomIndex = getRandomNumber(...indexNumber);
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
