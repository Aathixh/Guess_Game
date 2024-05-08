'use strict';

let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //No Number
    document.querySelector('.message').textContent = '😒 No Number';
  } else if (guess === secertNumber) {
    //Correct Number
    document.querySelector('.message').textContent = '👌Correct Guess!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secertNumber;
  } else if (guess > secertNumber) {
    //Too High
    if (score > 1) {
      document.querySelector('.message').textContent = '✈️Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😤You Lost!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secertNumber) {
    //Too Low
    if (score > 1) {
      document.querySelector('.message').textContent = '🤏Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😤You Lost!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secertNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
