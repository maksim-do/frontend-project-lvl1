import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;
const minHiddenMemberIndex = 0;

const getProgression = () => {
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(0, 100);
  return Array(lengthProgression).fill().map((el, index) => start + step * index);
};

const getQuestion = (progression, index) => {
  const progressionWithoutElement = progression.slice();
  progressionWithoutElement[index] = '..';
  return progressionWithoutElement.join();
};

const getDataForGame = () => {
  const progression = getProgression();
  const hiddenMemberIndex = getRandomNumber(minHiddenMemberIndex, lengthProgression - 1);
  const answer = String(progression[hiddenMemberIndex]);
  const question = getQuestion(progression, hiddenMemberIndex);
  return {
    question,
    answer,
  };
};

export default () => playGame(
  description,
  getDataForGame,
);
