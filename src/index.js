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
  if (answer !== answerUser) {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
    return;
  }
  console.log('Correct!');
  playGame(getDataForGame, attempt - 1, userName);
};

export default (description, getDataForGame) => {
  console.log(`Welcome to the Brain Games!\n${description}`);
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello ${userName}!`);
  playGame(getDataForGame, attemptCount, userName);
};
