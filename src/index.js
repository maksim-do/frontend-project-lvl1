import readlineSync from 'readline-sync';
import checkParity from './games/even';
import calculator from './games/calc';
import findDcd from './games/gcd';

const prepareData = {
  even: checkParity,
  calc: calculator,
  gcd: findDcd,
};

const hello = (task) => {
  console.log(`Welcome to the Brain Games!\n${task}`);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${userName}!`);
  return userName;
};


const gameStage = ({ data, answer }) => {
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
  const resultGameStage = gameStage({ data, answer });
  if (resultGameStage) {
    console.log(`'${resultGameStage}' is wrong answer ;(. Correct answer was "'${answer}'.\nLet's try again, ${userName}!`);
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
