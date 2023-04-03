function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase(),
    comp = computerSelection.toLowerCase();

  const choices = {
    paper: "scissors",
    scissors: "rock",
    rock: "paper",
  };

  if (comp === choices[player]) {
    return "comp";
  } else if (player === choices[comp]) {
    return "player";
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function game() {
  const prompt = require("prompt-sync")({ sigint: true });
  const rounds = parseInt(prompt("How many rounds?:"));
  console.log(`Playing ${rounds} rounds!`);
  let playerScore = 0,
    computerScore = 0;

  for (let i = 0; i < rounds; i++) {
    let playerChoice = prompt("Rock, Paper or Scissors? ");
    let computerChoice = getComputerChoice();
    console.log(`The Computer chooses: ${computerChoice}`);
    let result = playRound(playerChoice, computerChoice);

    if (result === "comp") {
      computerScore++;
      console.log("Computer won that round!");
    } else if (result === "player") {
      playerScore++;
      console.log("You won that round!");
    } else {
      console.log("Draw!");
    }
  }
  console.log(
    `Final Scores: Player: ${playerScore}, Computer: ${computerScore}`
  );
}

game();
