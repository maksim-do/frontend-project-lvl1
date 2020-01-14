import readlineSync from 'readline-sync';

const checkParity = (number) => {
  const parity = number % 2 ? 'no' : 'yes';
  return [number, parity];
};

const getArrayRandomNumbers = () => {
  const randomSetNumber = new Set();
  do {
    randomSetNumber.add(Math.round(Math.random() * 1000000));
  } while (randomSetNumber.size !== 3);
  return Array.from(randomSetNumber);
};

const hello = () => {
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${userName}!`);
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');
  return userName;
};

const game = ([number, parity]) => {
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (parity !== answer) return false;
  return true;
};

export default () => {
  const userName = hello();
  const randomNumbers = getArrayRandomNumbers().map((el) => checkParity(el));
  // eslint-disable-next-line no-restricted-syntax
  for (const el of randomNumbers) {
    if (!game(el)) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
