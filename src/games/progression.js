import getRandomNumber from '../getRandomNumber';

const mission = 'What number is missing in the progression?';

const getProgression = () => {
  const start = getRandomNumber();
  const step = getRandomNumber();
  return Array(10).fill(0).map((el, index) => start + step * index);
};

const getData = (array, index) => {
  const newArray = array.slice();
  newArray[index] = '..';
  return newArray.join();
};

const metodPrepareData = () => {
  const progression = getProgression();
  const randomIndex = getRandomNumber(10);
  const answer = `${progression[randomIndex]}`;
  const data = getData(progression, randomIndex);
  return {
    data,
    answer,
  };
};

export default () => ({
  mission,
  metodPrepareData,
});
