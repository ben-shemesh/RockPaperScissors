function computerPlay() {
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
}
console.log(computerPlay());
//
function playerPlay() {
  function playerPlay() {
    let playerPick = prompt(
      `Choose your weapon: "Rock" "Paper" or "Scissors".`
    ).toUpperCase();
    switch (playerPick) {
      case `ROCK` || `PAPER` || `SCISSORS`:
        return playerPick;
        break;
    }
    if(playerPick != `ROCK` || playerPick != `PAPER`|| playerPick != `SCISSORS`) {
      while (true){
        let playerPick = prompt(`select again`).toUpperCase()
        if (playerPick == `ROCK` || playerPick == `PAPER` || playerPick == `SCISSORS`) {
          return playerPick
        }
      }
    }
  }

// console.log(playerPlay());
// function playRound(computerSelection, playerSelection) {
//   let computerSelection = computerPlay();
//   let playerSelection = playerPick();
// }
// console.log(computerPlay());
