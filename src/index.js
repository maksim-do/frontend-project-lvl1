import readlineSync from 'readline-sync';
import checkParity from './games/even';
import calculator from './games/calc';
import findGcd from './games/gcd';
import findNumber from './games/progression';
import cheskPrime from './games/prime';

const prepareData = {
  even: checkParity,
  calc: calculator,
  gcd: findGcd,
  progression: findNumber,
  prime: cheskPrime,
};

const hello = (task) => {
  console.log(`Welcome to the Brain Games!\n${task}`);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${userName}!`);
  return userName;
};


const stageGame = ({ data, answer }) => {
  console.log(`Question: ${data}`);
  const answerUser = readlineSync.question('Your answer: ');
  return answer !== answerUser ? answerUser : false;
};

const game = (metodPrepare, attempts, userName) => {
  if (attempts === 0) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const { data, answer } = metodPrepare();
  const resultStagGame = stageGame({ data, answer });
  if (resultStagGame) {
    console.log(`'${resultStagGame}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    return;
  }
  console.log('Correct!');
  game(metodPrepare, attempts - 1, userName);
};

export default (nameOfGame) => {
  const numberOfAttempts = 3;
  const { mission, metodPrepareData } = prepareData[nameOfGame]();
  const userName = hello(mission);
  game(metodPrepareData, numberOfAttempts, userName);
};
