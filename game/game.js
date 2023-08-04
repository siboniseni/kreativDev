function computerPlay() {
  // Generate a random number between 0 and 2 inclusive
  const choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "paper" && computerSelection == "rock") {
      return "You Win! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
      return "You Win! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
      return "You Win! Scissors beats Paper";
  } else if (playerSelection == computerSelection) {
      return "It's a Tie!";
  } else {
      return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      
      console.log(result);

      if (result.startsWith("You Win!")) {
          playerScore++;
      } else if (result.startsWith("You Lose!")) {
          computerScore++;
      }
  }

  if (playerScore > computerScore) {
      console.log("You win the game!");
  } else if (playerScore < computerScore) {
      console.log("Computer wins the game!");
  } else {
      console.log("It's a tie game!");
  }
}

game();
