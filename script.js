let playerScore = Number(localStorage.getItem("playerScore")) || 0;
let computerScore = Number(localStorage.getItem("computerScore")) || 0;

updateScore();

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }

  return "computer";
}

function playGame(playerChoice) {
  if (playerScore === 5 || computerScore === 5) return;

  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  let message = `You chose ${playerChoice}, Computer chose ${computerChoice}. `;

  if (winner === "player") {
    playerScore++;
    message += "You Win this round!";
  } else if (winner === "computer") {
    computerScore++;
    message += "Computer Wins this round!";
  } else {
    message += "It's a Draw!";
  }

  saveScore();
  updateScore();
  document.getElementById("result").innerText = message;

  checkFinalWinner();
}

function checkFinalWinner() {
  if (playerScore === 5) {
    document.getElementById("result").innerText = "🎉 You won the game!";
  }
  if (computerScore === 5) {
    document.getElementById("result").innerText = "💻 Computer won the game!";
  }
}

function updateScore() {
  document.getElementById("score").innerText =
    `Player: ${playerScore} | Computer: ${computerScore}`;
}

function saveScore() {
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  localStorage.clear();
  updateScore();
  document.getElementById("result").innerText = "Game Reset. Play again!";
}
