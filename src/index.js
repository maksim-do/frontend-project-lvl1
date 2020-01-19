import readlineSync from 'readline-sync';

const stageGame = ({ data, answer }) => {
  console.log(`Question: ${data}`);
  const answerUser = readlineSync.question('Your answer: ');
  return answer !== answerUser ? answerUser : false;
};

const game = (metodPrepare, attemptCount, userName) => {
  if (attemptCount === 0) {
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
  game(metodPrepare, attemptCount - 1, userName);
};

export default ({ mission, getDataForGame }) => {
  const attemptCount = 3;
  console.log(`Welcome to the Brain Games!\n${mission}`);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${userName}!`);
  game(getDataForGame, attemptCount, userName);
};
