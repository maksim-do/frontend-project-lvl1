import getRandomNumber from '../getRandomNumber';

const mission = 'Answer "yes" if the number is even, otherwise answer "no".';

const isParity = (number) => !(number % 2);

const metodPrepareData = () => {
  const data = getRandomNumber();
  const answer = isParity(data) ? 'yes' : 'no';
  return {
    data,
    answer,
  };
};

export default () => ({
  mission,
  metodPrepareData,
});
