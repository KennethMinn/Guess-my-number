'use strict';

const message = document.querySelector('.message');
const againBtn = document.querySelector('.again');
const guest_num = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const number = document.querySelector('.number');
const labelScore = document.querySelector('.label-score');
const labelHighScore = document.querySelector('.label-highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1; //random number between 1 and 20
let score = 20;
let highScore = 0;

const displayMessage = mes => {
  message.textContent = mes;
};

const calcScore = () => {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
};

checkBtn.addEventListener('click', () => {
  //when user doesn't guess
  if (!guest_num.valueAsNumber) {
    displayMessage('⛔️ No number!');
  }

  //when user's guess is right
  else if (guest_num.valueAsNumber === secretNumber) {
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    displayMessage('🎉 Correct Number!');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //refactoring the codes by reusing functions and by using ternary
  else {
    guest_num.valueAsNumber > secretNumber
      ? displayMessage('📈 Too high!')
      : displayMessage('📉 Too low!');
    calcScore();
  }

  //   //when the score is higher than the secretNumber
  //   else if (guest_num.valueAsNumber > secretNumber) {
  //     displayMessage('📈 Too high!');
  //     calcScore();
  //   }

  //   //when the score is lower than the secretNumber
  //   else if (guest_num.valueAsNumber < secretNumber) {
  //     displayMessage('📉 Too low!');
  //     calcScore();
  //   }
});

//when user wants to start again or lose the game(reset the game)
againBtn.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  guest_num.valueAsNumber = null;
  number.textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
});
