function computerplay() {
  let computerNumber = Math.floor(Math.random() * 3) + 1;
  switch (computerNumber) {
    case 1:
      return `Rock`;
      break;
    case 2:
      return `Paper`;
      break;
    case 3:
      return `Scissors`;
  }
  return computerNumber;
}
function playerPlay() {
  let playerPick = prompt(`Choose your weapon: "Rock" "Paper" or "Scissors".`);
  if (
    playerPick != `Rock` ||
    playerPick != `Paper` ||
    playerPick != `Scissors`
  ) {
    return `Please choose either "Rock", "Paper" or "Scissors" (this is case sensitive).`;
  } else {
    return playerPick;
  }
}
function playRound(computerSelection, playerSelection) {
  let computerSelection = computerplay();
  let playerSelection = playerPick();
}
console.log(playerPlay());
