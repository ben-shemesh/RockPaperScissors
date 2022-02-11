let round = 1;
let userScore = 0;
let computerScore = 0;
let tieScore = 0;

function getComputerPick() {
  let computerPick = Math.floor(Math.random() * 3) + 1;
  if (computerPick == 1) return `ROCK`;
  else if (computerPick == 2) return `PAPER`;
  else return `SCISSORS`;
}

function getPlayerPick() {
  let playerPick = prompt(
    `Choose your weapon: "Rock" "Paper" or "Scissors".`
  ).toUpperCase();
  return playerPick;
}

function playRound(computerSelection, playerSelection) {
  computerSelection = getComputerPick();
  playerSelection = getPlayerPick();
  if (computerSelection == playerSelection) {
    tieScore++;
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
function scoreChecker() {
  if (userScore > computerScore) {
    alert(
      `🎉🥳🎊 You win the game. 🎉🥳🎊.The score was: Your Score :${userScore} to the Computer's : ${computerScore}, with ${tieScore} ties.`
    );
  } else if (userScore < computerScore) {
    alert(
      `😞😞😞 You loose the game. 😞😞😞. The score was: Your Score :${userScore} to the Computer's :${computerScore}, with ${tieScore} ties.`
    );
  } else {
    alert(
      `🪢🪢🪢 It's a tie 🪢🪢🪢.The score was: Your Score: ${userScore} to the Computer's :${computerScore}, with ${tieScore} ties.`
    );
  }
}
function playGame() {
  while (round < 6) {
    playRound();
    round++;
  }
  scoreChecker();
}
playGame();
