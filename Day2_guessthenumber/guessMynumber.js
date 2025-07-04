let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const message = document.querySelector('.message');
const scoreDisplay = document.getElementById('score');
const highscoreDisplay = document.getElementById('highscore');
const numberDisplay = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'No Number Found';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number!';
    numberDisplay.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = `Highscore: ${highscore}`;
    }
  } else {
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      scoreDisplay.textContent = `Score: ${score}`;
    } else {
      message.textContent = 'You lost the game!';
      scoreDisplay.textContent = 'Score: 0';
      document.body.style.backgroundColor = '#b34747';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = 'Start guessing...';
  numberDisplay.textContent = '?';
  scoreDisplay.textContent = `Score: ${score}`;
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
});