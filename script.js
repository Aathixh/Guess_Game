'use strict';

const secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secertNumber;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '😒 No Number';
  } else if (guess === secertNumber) {
    document.querySelector('.message').textContent = '👌Correct Guess!';
  } else if (guess > secertNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '✈️Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😤You Lost!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secertNumber) {
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
