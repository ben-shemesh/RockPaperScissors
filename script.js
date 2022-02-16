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
    return alert(
      `It's a tie 🪢 : Your Score: ${userScore}, Computer's Score: ${computerScore}. It's the ${round} round.`
    );
  } else if (
    (playerSelection == `ROCK` && computerSelection == `SCISSORS`) ||
    (playerSelection == "PAPER" && computerSelection == `ROCK`) ||
    (playerSelection == `SCISSORS` && computerSelection == `PAPER`)
  ) {
    userScore++;
    return alert(
      `You win 😃 : Your Score: ${userScore}, Computer's Score: ${computerScore}. It's the ${round} round.`
    );
  } else {
    computerScore++;
    return alert(
      `You loose 😞 : Your Score: ${userScore}, Computer's Score: ${computerScore}. It's the ${round} round.`
    );
  }
}
function scoreChecker() {
  if (userScore > computerScore) {
    return alert(
      `🎉🥳🎊 You win the game. 🎉🥳🎊.The score was: Your Score :${userScore} to the Computer's : ${computerScore}, with ${tieScore} ties.`
    );
  } else if (userScore < computerScore) {
    return alert(
      `😞😞😞 You loose the game. 😞😞😞. The score was: Your Score :${userScore} to the Computer's :${computerScore}, with ${tieScore} ties.`
    );
  } else {
    return alert(
      `🪢🪢🪢 It's a tie 🪢🪢🪢.The score was: Your Score: ${userScore} to the Computer's :${computerScore}, with ${tieScore} ties.`
    );
  }
}
function playGame() {
  while (userScore <= 5 && computerScore <= 5) {
    playRound();
    round++;
  }
  scoreChecker();
}
playGame();
