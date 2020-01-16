import getRandomNumber from '../getRandomNumber';

const mission = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  const iter = (divider) => {
    if (divider > Math.floor(Math.sqrt(number))) return true;
    if (!(number % divider)) return false;
    return iter(divider + 1);
  };
  return iter(2);
};

const metodPrepareData = () => {
  const number = getRandomNumber();
  const answer = isPrime(number) ? 'yes' : 'no';
  const data = `${number}`;
  return {
    data,
    answer,
  };
};

export default () => ({
  mission,
  metodPrepareData,
});
