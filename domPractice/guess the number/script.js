'use strict';
// the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;
document.querySelector('#secretNumber').textContent = secretNumber;
document.querySelector('#check').addEventListener('click', function () {
  console.log(document.querySelector('#guess').value);
  const guess = Number(document.querySelector('#guess').value);
  if (!guess) {
    document.querySelector('#message').textContent = 'no number';
  } else if (guess === secretNumber) {
    document.querySelector('#message').textContent = ' correct answer!';
    document.querySelector('#secretNumber').textContent = secretNumber;
    winning();
    highScore();
  } else if (guess !== secretNumber) {
    document.querySelector('#message').textContent =
      guess > secretNumber ? ' to high!' : ' to low!';
    decreaseScore();
  }
});
function winning() {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('#secretNumber').style.width = '65rem';
}
function highScore() {
  if (highestScore < score) {
    highestScore = score;
    document.querySelector('#highScore').textContent = score;
  }
}
function decreaseScore() {
  if (score > 1) {
    score = score - 1;
    document.querySelector('#score').textContent = score;
    document.querySelector('#guess').value = '';
  } else {
    document.querySelector('#message').textContent =
      ' you lost the game! try again';
  }
}
document.querySelector('#again').addEventListener('click', function again() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('#secretNumber').textContent = secretNumber;
  document.querySelector('#message').textContent = ' start guessing!';
  document.querySelector('#score').textContent = score;
  document.querySelector('#guess').value = '';
  document.querySelector('#secretNumber').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
