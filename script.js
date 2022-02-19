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

let rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  getPlayerPick(rock);
  console.log(`you picked rock`);
});
let paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  getPlayerPick(paper);
  console.log(`you picked paper`);
});
let scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  getPlayerPick(scissors);
  console.log(`you picked scissors`);
});

function getPlayerPick() {}

function playRound(computerSelection, playerSelection) {
  computerSelection = getComputerPick();
  playerSelection = getPlayerPick();
  if (computerSelection == playerSelection) {
    tieScore++;
    console.log(
      `It's a tie 🪢 : Your Score: ${userScore}, Computer's Score: ${computerScore}. It's the ${round} round.`
    );
  } else if (
    (playerSelection == `ROCK` && computerSelection == `SCISSORS`) ||
    (playerSelection == "PAPER" && computerSelection == `ROCK`) ||
    (playerSelection == `SCISSORS` && computerSelection == `PAPER`)
  ) {
    userScore++;
    console.log(
      `You win 😃 : Your Score: ${userScore}, Computer's Score: ${computerScore}. It's the ${round} round.`
    );
  } else {
    computerScore++;
    console.log(
      `You loose 😞 : Your Score: ${userScore}, Computer's Score: ${computerScore}. It's the ${round} round.`
    );
  }
}
function scoreChecker() {
  if (userScore > computerScore) {
    console.log(
      `🎉🥳🎊 You win the game. 🎉🥳🎊.The score was: Your Score :${userScore} to the Computer's : ${computerScore}, with ${tieScore} ties.`
    );
  } else if (userScore < computerScore) {
    console.log(
      `😞😞😞 You loose the game. 😞😞😞. The score was: Your Score :${userScore} to the Computer's :${computerScore}, with ${tieScore} ties.`
    );
  } else {
    console.log(
      `🪢🪢🪢 It's a tie 🪢🪢🪢.The score was: Your Score: ${userScore} to the Computer's :${computerScore}, with ${tieScore} ties.`
    );
  }
}
// function playGame() {
//   while (userScore <= 5 && computerScore <= 5) {
//     playRound();
//     round++;
//   }
//   scoreChecker();
// }
// playGame();

// const rockButton = document.querySelector(".rock");
// rockButton.addEventListener("click", () => {
//   console.log(`Rock`);
// });
// const paperButton = document.querySelector(".paper");
// rockButton.addEventListener("click", () => {
//   console.log(`Paper`);
// });
// const scissorsButton = document.querySelector(".scissors");
// rockButton.addEventListener("click", () => {
//   console.log(`Scissors`);
// });
