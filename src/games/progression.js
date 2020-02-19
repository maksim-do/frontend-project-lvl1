import getRandomNumber from '../getRandomNumber';
import playGame from '..';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;
const minValueNumber = 0;
const maxValueNumber = 1000;
const minIndexNumber = 0;

const getProgression = () => {
  const start = getRandomNumber(minValueNumber, maxValueNumber);
  const step = getRandomNumber(minValueNumber, maxValueNumber);
  return Array(lengthProgression).fill(0).map((el, index) => start + step * index);
};

const getQuestion = (progression, index) => {
  const progressionWithoutElement = progression.slice();
  progressionWithoutElement[index] = '..';
  return progressionWithoutElement.join();
};

const getDataForGame = () => {
  const progression = getProgression();
  const hiddenMemberIndex = getRandomNumber(minIndexNumber, lengthProgression - 1);
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
