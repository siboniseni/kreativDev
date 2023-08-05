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

// The rest of your code remains unchanged...
