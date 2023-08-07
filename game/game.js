function computerPlay() {
  
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
  const winMessages = [
      "You're on fire! You roasted that Rock!",
      "Rock and Roll! You crushed that Scissors!",
      "Scissors sliced and diced! You win!",
  ];

  const loseMessages = [
      "Oh no! The computer's Paper covered your Rock.",
      "Tough luck! Computer's Rock smashed your Scissors.",
      "Snip snip! Computer's Scissors got the best of you.",
  ];

  const tieMessages = [
      "Great minds think alike! It's a Tie!",
      "It's a draw! Nobody wins this round.",
      "A tie! No winners, no losers.",
  ];

  if (playerSelection == "paper" && computerSelection == "rock") {
      return "You Win! " + winMessages[Math.floor(Math.random() * winMessages.length)];
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
      return "You Win! " + winMessages[Math.floor(Math.random() * winMessages.length)];
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
      return "You Win! " + winMessages[Math.floor(Math.random() * winMessages.length)];
  } else if (playerSelection == computerSelection) {
      return tieMessages[Math.floor(Math.random() * tieMessages.length)];
  } else {
      return "You Lose! " + loseMessages[Math.floor(Math.random() * loseMessages.length)];
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i < 6; i++) {
    let playerSelection = prompt("Round " + i + "\nEnter your choice: ");
    
    // Check if the user canceled
    if (playerSelection === null) {
      console.log(`Final Scores: Player Score: ${playerScore} - Computer Score: ${computerScore}`);
      console.log("You quit the game. Goodbye!");
      return;
    }
    
    playerSelection = playerSelection.toLowerCase();

    // Input validation loop
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
      playerSelection = prompt("Invalid choice. Please enter 'rock', 'paper', or 'scissors': ");
      
      // Check if the user canceled during input validation
      if (playerSelection === null) {
        console.log(`Final Scores: Player Score: ${playerScore} - Computer Score: ${computerScore}`);
        console.log("You quit the game. Goodbye!");
        return;
      }
      
      playerSelection = playerSelection.toLowerCase();
    }

    const computerSelection = computerPlay();

    // Determine the result of the round and update scores
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.startsWith("You Win!")) {
      playerScore++;
    } else if (result.startsWith("You Lose!")) {
      computerScore++;
    }

    console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);
  }

  // Determine the winner of the game based on scores
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

game();

