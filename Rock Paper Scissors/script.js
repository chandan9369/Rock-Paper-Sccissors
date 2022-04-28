let Game = document.querySelector(".Game");
var decision = "";
var totalScore = 0;
// total score
let scoreboard = document.querySelector(".total-score h1");

/*
Rules
------>

1. rock and paper  ---> paper wins
2. rock and scissor ----> rock wins
3. paper and scissor ----> scissor wins

*/

const allColors = [
  `hsl(230, 89%, 65%)`,
  `hsl(40, 84%, 53%)`,
  `hsl(349, 70%, 56%)`,
];

const allOptions = [
  `<img src="./images/icon-paper.svg" alt="paper" />`,
  `<img src="./images/icon-scissors.svg" alt="scissors" />`,
  `<img src="./images/icon-rock.svg" alt="rock" />`,
];

var pickedButton = 0;
var housePicked = 0;

let compWin = false;
let youWin = false;

// all buttons in game window 1
let gameWindow1 = document.querySelector(".game-window-1");
let allButtons = document.querySelectorAll(".primary-btn");

// first button --> Paper button
allButtons[0].onclick = function () {
  pickedButton = 0;
  show();
};

// second button --> scissor button
allButtons[1].onclick = function () {
  pickedButton = 1;
  show();
};

// third button --> rock button
allButtons[2].onclick = function () {
  pickedButton = 2;
  show();
};

function show() {
  gameWindow1.style.display = "none";
  housePicked = Math.floor(Math.random() * 3);

  // decision
  if (housePicked == pickedButton) {
    decision = "⚖️ TIE ⚖️";
    compWin = youWin = false;
  } else {
    // all lose conditions
    if (
      (pickedButton == 0 && housePicked == 1) ||
      (pickedButton == 1 && housePicked == 2) ||
      (pickedButton == 2 && housePicked == 0)
    ) {
      decision = "YOU LOSE :(";
      compWin = true;
      youWin = false;
      totalScore -= 1;
    } else {
      youWin = true;
      compWin = false;
      decision = "YOU WIN :)";
      totalScore += 1;
    }
  }

  // new game window with hands picked
  let gameWindow2 = document.querySelector(".game-window-2");
  gameWindow2.style.display = "flex";

  pickedHands();

  // decision
  let result = document.querySelector(".decision h1");
  result.innerText = `${decision}`;

  // play again functionality
  let playAgain = document.querySelector(".play-again");
  playAgain.onclick = function () {
    pickedButton = 0;
    housePicked = 0;
    youwin = compWin = false;
    gameWindow2.style.display = "none";
    gameWindow1.style.display = "flex";
  };

  // updating scoreboard
  scoreboard.innerText = `${totalScore}`;
}

function pickedHands() {
  let buttons = document.querySelectorAll(".picked");
  buttons[0].innerHTML = allOptions[pickedButton];
  if (youWin && !compWin) {
    buttons[0].style.boxShadow = `0 0 .1em 30px rgba(255,255,255,0.04),
    0 0 1em 60px rgba(255,255,255,0.03),
    0 0 1em 90px rgba(255,255,255,0.002)`;
    buttons[1].style.boxShadow = "none";
  } else if (compWin && !youWin) {
    buttons[0].style.boxShadow = "none";
    buttons[1].style.boxShadow = `0 0 .1em 30px rgba(255,255,255,0.04),
    0 0 1em 60px rgba(255,255,255,0.03),
    0 0 1em 90px rgba(255,255,255,0.002)`;
  } else if (youWin && compWin) {
    buttons[0].style.boxShadow = `0 0 .1em 30px rgba(255,255,255,0.04),
    0 0 1em 60px rgba(255,255,255,0.03),
    0 0 1em 90px rgba(255,255,255,0.002)`;
    buttons[1].style.boxShadow = `0 0 .1em 30px rgba(255,255,255,0.04),
    0 0 1em 60px rgba(255,255,255,0.03),
    0 0 1em 90px rgba(255,255,255,0.002)`;
  } else {
    buttons[0].style.boxShadow = "none";
    buttons[1].style.boxShadow = "none";
  }
  buttons[0].style.borderColor = `${allColors[pickedButton]}`;
  buttons[1].innerHTML = allOptions[housePicked];
  buttons[1].style.borderColor = `${allColors[housePicked]}`;
}

// pop up funtioning
const ruleBtn = document.querySelector(".rule");
ruleBtn.addEventListener("click", function () {
  document.querySelector(".rulePopUp").style.display = "flex";
});

// closing pop up

const close = document.querySelector(".header img");
close.addEventListener("click", function () {
  document.querySelector(".rulePopUp").style.display = "none";
});
