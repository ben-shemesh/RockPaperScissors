// Global variables
let round = 1;
let userScore = 0;
let computerScore = 0;
let tieScore = 0;
// DOM variables
let scissors = document.querySelector(".scissors");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let roundCount = document.querySelector(".round");

// Event Listeners
rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

function getComputerPick() {
  let computerPick = Math.floor(Math.random() * 3) + 1;
  if (computerPick == 1) return `rock`;
  else if (computerPick == 2) return `paper`;
  else return `scissors`;
}

function playRound(playerSelection) {
  let computerSelection = getComputerPick();
  if (computerSelection == playerSelection) {
    tieScore++;
    console.log(
      `It's a tie 🪢 : Your Score: ${userScore}, Computer's Score: ${computerScore}. It's the ${round} round.`
    );
  } else if (
    (playerSelection == `rock` && computerSelection == `scissors`) ||
    (playerSelection == "paper" && computerSelection == `rock`) ||
    (playerSelection == `scissors` && computerSelection == `paper`)
  ) {
    userScore++;
    console.log(
      `You win 😃 : Your Score: ${userScore}, Computer's Score: ${computerScore}. The Computer chose: ${computerSelection}. It's the ${round} round.`
    );
  } else {
    computerScore++;
    console.log(
      `You loose 😞 : Your Score: ${userScore}, Computer's Score: ${computerScore}. The Computer chose: ${computerSelection}. It's the ${round} round.`
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
//   while (userScore < 5 && computerScore < 5) {
//     playRound();
//     round++;
//   }
//   scoreChecker();
// }
// playGame();
