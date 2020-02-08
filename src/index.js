import readlineSync from 'readline-sync';

const attemptCount = 3;

const playGame = (getDataForGame, attempt, userName) => {
  if (attempt === 0) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const { question, answer } = getDataForGame();
  console.log(`Question: ${question}`);
  const answerUser = readlineSync.question('Your answer: ');
  const resultStagGame = answer !== answerUser ? answerUser : false;
  if (resultStagGame) {
    console.log(`'${resultStagGame}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    return;
  }
  console.log('Correct!');
  playGame(getDataForGame, attempt - 1, userName);
};

export default (mission, getDataForGame) => {
  console.log(`Welcome to the Brain Games!\n${mission}`);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${userName}!`);
  playGame(getDataForGame, attemptCount, userName);
};
