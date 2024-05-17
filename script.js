'use strict';

const againBtn = document.querySelector('.again');

const secretNumBox = document.querySelector('.number');
const msgBox = document.querySelector('.message');
const scoreBox = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const guessBox = document.querySelector('.guess');
const highScoreBox = document.querySelector('.highscore');
const range = document.querySelector('.range');

const displayMessage = msg => (msgBox.textContent = msg);

const MAIN = 30;

let score = MAIN;

let secretNumber = Math.ceil(Math.random() * MAIN);

let highScore = 0;
scoreBox.textContent = MAIN;
range.textContent = MAIN;
highScoreBox.textContent = highScore;

checkBtn.addEventListener('click', function () {
  const guess = Number(guessBox.value);

  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.body.style.backgroundColor = '#4bbd28';
    secretNumBox.textContent = secretNumber;
    secretNumBox.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreBox.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      scoreBox.textContent = score;
    } else {
      displayMessage('You Lost The Game!!!');
      scoreBox.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  secretNumber = Math.ceil(Math.random() * MAIN);
  score = MAIN;
  scoreBox.textContent = MAIN;
  displayMessage('Start guessing...');
  guessBox.value = '';
  secretNumBox.textContent = '?';
  secretNumBox.style.width = '15rem';
  document.body.style.backgroundColor = '#222';
});

guessBox.addEventListener('input', function () {
  if (parseInt(this.value) > MAIN) {
    this.value = MAIN;
  }
});
