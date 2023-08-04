// Function to randomly select 'rock', 'paper', or 'scissors' for the computer
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

// Function to determine the result of a single round
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

// Main function to run the game
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++) {
        
        let playerSelection = prompt("Round " + i + "\nEnter your choice: ").toLowerCase();

        // Input validation loop
        while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            playerSelection = prompt("Invalid choice. Please enter 'rock', 'paper', or 'scissors': ").toLowerCase();
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

