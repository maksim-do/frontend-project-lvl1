import getRandomNumber from '../getRandomNumber';

const mission = 'Find the greatest common divisor of given numbers';

const getDivizor = (number1, number2) => {
  if (number1 === number2) return number1;
  const [dividend, divider] = number1 > number2 ? [number1, number2] : [number2, number1];
  const remainder = dividend % divider;
  if (!remainder) return divider;
  return getDivizor(divider, remainder);
};

const getData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const data = `${number1} ${number2}`;
  return {
    data,
    answer: `${getDivizor(number1, number2)}`,
  };
};

export default () => ({
  mission,
  getData,
});
