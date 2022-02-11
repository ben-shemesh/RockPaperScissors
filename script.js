let round = 1;
let userScore = 0;
let computerScore = 0;

function computerPlay() {
  let computerNumber = Math.floor(Math.random() * 3) + 1;
  switch (computerNumber) {
    case 1:
      return `ROCK`;
      break;
    case 2:
      return `PAPER`;
      break;
    case 3:
      return `SCISSORS`;
  }
}
function playerPlay() {
  let playerPick = prompt(
    `Choose your weapon: "Rock" "Paper" or "Scissors".`
  ).toUpperCase();
  return playerPick;
}

function playRound(computerSelection, playerSelection) {
  computerSelection = computerPlay();
  playerSelection = playerPlay();
  if (computerSelection == playerSelection) {
    alert(
      `It's a tie 🪢 : Your Score: ${userScore}, Computer's Score: ${computerScore}. It's the ${round} round.`
    );
  } else if (
    (playerSelection == `ROCK` && computerSelection == `PAPER`) ||
    (playerSelection == "PAPER" && computerSelection == `SCISSORS`) ||
    (playerSelection == `SCISSORS` && computerSelection == `PAPER`)
  ) {
    userScore++,
      alert(
        `You win 😃 : Your Score: ${userScore}, Computer's Score: ${computerScore}. It's the ${round} round.`
      );
  } else {
    computerScore++,
      alert(
        `You loose 😞 : Your Score: ${userScore}, Computer's Score: ${computerScore}. It's the ${round} round.`
      );
  }
}
function game() {
  do {
    playRound();
    round++;
  } while (round <= 5);
}
game();
