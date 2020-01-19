import readlineSync from 'readline-sync';

const stageGame = ({ question, answer }) => {
  console.log(`Question: ${question}`);
  const answerUser = readlineSync.question('Your answer: ');
  return answer !== answerUser ? answerUser : false;
};

const playGame = (metodPrepare, attemptCount, userName) => {
  if (attemptCount === 0) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const { question, answer } = metodPrepare();
  const resultStagGame = stageGame({ question, answer });
  if (resultStagGame) {
    console.log(`'${resultStagGame}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    return;
  }
  console.log('Correct!');
  playGame(metodPrepare, attemptCount - 1, userName);
};

export default ({ mission, getDataForGame }) => {
  const attemptCount = 3;
  console.log(`Welcome to the Brain Games!\n${mission}`);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${userName}!`);
  playGame(getDataForGame, attemptCount, userName);
};
