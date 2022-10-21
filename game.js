let playerScore = 0;
let computerScore = 0;
let computerSelection = "";
let currentRound = 1;
let roundWinner = "";
let matchWinner = "";

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const roundSpan = document.getElementById("current-round");

const modal = document.getElementById("myModal");
const modalButton = document.getElementById("modal-close-icon");
const resetGameButton = document.getElementById("reset-game");
const modalText = document.getElementById("winner-announce");

modalButton.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

resetGameButton.addEventListener("click", () => resetGame());

rockButton.addEventListener("click", () =>
  playRound("rock", getComputerChoice())
);
paperButton.addEventListener("click", () =>
  playRound("paper", getComputerChoice())
);
scissorsButton.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);

function getComputerChoice() {
  let deciderNumber = Math.floor(Math.random() * 3);
  let computerVerdict;
  switch (deciderNumber) {
    case 0:
      computerVerdict = "rock";
      break;
    case 1:
      computerVerdict = "scissors";
      break;
    case 2:
      computerVerdict = "paper";
      break;
  }
  return computerVerdict;
}

function playRound(buttonChoice, computerSelection) {
  if (playerScore == 5 || computerScore == 5) {
    modal.style.display = "block";
  } else {
    announceMatchWinner(playerScore, computerScore);
    currentRound++;
    roundSpan.textContent = `Round: ${currentRound}`;
    let playerSelection = buttonChoice;
    if (playerSelection === computerSelection) {
      roundWinner = "tie";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      roundWinner = "player";
      playerScore++;
    } else {
      roundWinner = "computer";
      computerScore++;
    }

    console.log(playerScore);
    console.log(computerScore);
    scoreUpdate();
    announceMatchWinner(playerScore, computerScore);
  }
}

function scoreUpdate() {
  playerScoreSpan.textContent = `Player Score: ${playerScore}`;
  computerScoreSpan.textContent = `Computer Score: ${computerScore}`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  currentRound = 1;
  roundWinner = "";
  matchWinner = "";
  roundSpan.textContent = `Round: ${currentRound}`;
  scoreUpdate();
  modal.style.display = "none";
}

function announceMatchWinner(playerScore, computerScore) {
  if (playerScore == 5) {
    scoreUpdate();
    modalText.textContent = `YOU WIN!!!`;
    modal.style.display = "block";
  } else if (computerScore == 5) {
    scoreUpdate();
    modalText.textContent = `COMPUTER WINS!!!`;
    modal.style.display = "block";
  }
}
