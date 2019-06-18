const startBtn = document.querySelector("#startbtn");
const intro = document.querySelector(".intro");
const name = document.querySelector(".name");
const game = document.querySelectorAll(".game");
const options = document.querySelectorAll(".options");
const letsplay = document.querySelector("#letsplay");
const optionsButton = document.querySelectorAll("div.options>button");
const playername = document.getElementById("playername");
const resetButton = document.getElementById("resetbtn");
let playerScore = 0;
let computerScore = 0;

startBtn.onclick = () => {
  intro.classList.remove("show");
  intro.classList.add("hidden");
  name.classList.remove("hidden");
  name.classList.add("show");
};

letsplay.onclick = () => {
  if (playername.value == "") {
    alert("please choose a username");
  } else {
    intro.classList.add("hidden");
    name.classList.remove("show");
    name.classList.add("hidden");

    game.forEach(x => {
      x.classList.remove("hidden");
      x.classList.add("show");
    });

    options.forEach(x => {
      x.classList.remove("hidden");
      x.classList.add("show");
    });

    document.getElementById("score_playername").innerHTML = playername.value;
  }
};

//computer choice

//console.log(computerOption);

// for (let i = 0; i < optionsButton.length; i++) {
//   optionsButton[i].addEventListener("click", findbtn);
// }
// ===
optionsButton.forEach(x => {
  x.addEventListener("click", findbtn);
});

let playerOption;
let computerOption;

function findbtn() {
  playerOption = this.id;
  optionsButton.forEach(x => {
    x.style.border = "none";
  });
  this.style.border = "2px solid black";

  //console.log(element);
  const playerhand = document.getElementById("playerhand");
  playerhand.src = `assets/${playerOption}.png`;
  playerhand.classList.add("hidden");

  const allOptions = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  computerOption = allOptions[random];
  const computerhand = document.getElementById("computerhand");
  computerhand.src = `assets/${computerOption}.png`;
  computerhand.classList.add("hidden");
  winner.classList.add("hidden");
}

//console.log(computerOption);
const playBtn = document.getElementById("playbtn");
const winner = document.getElementById("winner");
winner.classList.add("hidden");

playBtn.onclick = () => {
  winner.classList.remove("hidden");
  winner.classList.add("show");
  playerhand.classList.remove("hidden");
  computerhand.classList.remove("hidden");
  playerhand.classList.add("show");
  computerhand.classList.add("show");

  if (playerOption === computerOption) {
    winner.innerText = "It is a tie !";
  } else if (
    (playerOption === "rock" && computerOption === "scissors") ||
    (playerOption === "paper" && computerOption === "rock") ||
    (playerOption === "scissors" && computerOption === "paper")
  ) {
    winner.innerText = "you win !";
    playerScore++;
  } else {
    winner.innerText = "you lost!";
    computerScore++;
  }

  setScores();
};

resetButton.onclick = () => {
  options.forEach(x => {
    x.classList.remove("show");
    x.classList.add("hidden");
  });

  game.forEach(x => {
    x.classList.remove("show");
    x.classList.add("hidden");
  });

  name.classList.remove("hidden");
  name.classList.add("show");

  resetScores();
};

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  setScores();
}

function setScores() {
  document.getElementById("score_playerscore").innerHTML = playerScore;
  document.getElementById("score_computerscore").innerHTML = computerScore;
}
