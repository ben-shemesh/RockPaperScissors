// Global variables
let roundCount = 1;
let userScore = 0;
let computerScore = 0;
let tieScore = 0;
// DOM variables
let scissors = document.querySelector(".scissors");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let roundNum = document.querySelector(".roundNum");
let results = document.querySelector(".results");
let pointCount = document.querySelector(".pointCount");
let picks = document.querySelector(".player-choices");
let start = document.querySelector(".start-button");

// Event Listeners
rock.addEventListener("click", () => playRound("Rock"));
paper.addEventListener("click", () => playRound("Paper"));
scissors.addEventListener("click", () => playRound("Scissors"));

function getComputerPick() {
  let computerPick = Math.floor(Math.random() * 3) + 1;
  if (computerPick == 1) return `Rock`;
  else if (computerPick == 2) return `Paper`;
  else return `Scissors`;
}

function playRound(playerSelection) {
  let computerSelection = getComputerPick();
  if (computerSelection == playerSelection) {
    roundNum.textContent = `Round ${roundCount++}`;
    tieScore++;
    results.textContent = `🤜🤛 It's a tie! 🤜🤛`;
    pointCount.textContent = `Your Score: ${userScore}, Computer's Score: ${computerScore}`;
  } else if (
    (playerSelection == `Rock` && computerSelection == `Scissors`) ||
    (playerSelection == "Paper" && computerSelection == `Rock`) ||
    (playerSelection == `Scissors` && computerSelection == `Paper`)
  ) {
    roundNum.textContent = `Round ${roundCount++}`;
    userScore++;
    results.textContent = `You win 😃 : ${playerSelection} Beats Computer's ${computerSelection}.`;
    pointCount.textContent = `Your Score: ${userScore}, Computer's Score: ${computerScore}`;
  } else if (
    (computerSelection == "Rock" && playerSelection == "Scissors") ||
    (computerSelection == "Paper" && playerSelection == "Rock") ||
    (computerSelection == "Scissors" && playerSelection == "Paper")
  ) {
    roundNum.textContent = `Round ${roundCount++}`;
    computerScore++;
    results.textContent = `You loose 😞 : Computer's ${computerSelection} Beats Your ${playerSelection} .`;
    pointCount.textContent = `Your Score: ${userScore}, Computer's Score: ${computerScore}`;
  }
}
function scoreChecker() {
  if (userScore > computerScore) {
    results.textContent = `🎉🥳🎊 You win the game. 🎉🥳🎊.The score was: Your Score :${userScore} to the Computer's : ${computerScore}, with ${tieScore} ties.`;
  } else if (userScore < computerScore) {
    results.textContent = `😞😞😞 You loose the game. 😞😞😞. The score was: Your Score :${userScore} to the Computer's :${computerScore}, with ${tieScore} ties.`;
  }
}
