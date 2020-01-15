import getRandomNumber from '../getRandomNumber';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkParity = (number) => {
  const parity = number % 2 ? 'no' : 'yes';
  return parity;
};

const metodPrepareData = () => {
  const data = getRandomNumber();
  return {
    data,
    answer: checkParity(data),
  };
};

export default () => ({
  mission,
  metodPrepareData,
});
