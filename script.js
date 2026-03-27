// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Set max attempts
let maxAttempts = 7;
let attemptsLeft = maxAttempts;

// Display attempts
document.getElementById("attempts").textContent = 
    "Attempts left: " + attemptsLeft;

function checkGuess() {
    let userGuess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    // Validate input
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "⚠️ Please enter a number between 1 and 100";
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        endGame();
    } else if (attemptsLeft === 0) {
        message.textContent = "❌ Game Over! The number was " + randomNumber;
        endGame();
    } else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high!";
    } else {
        message.textContent = "📈 Too low!";
    }

    document.getElementById("attempts").textContent =
        "Attempts left: " + attemptsLeft;

    document.getElementById("guessInput").value = "";
}

function endGame() {
    document.getElementById("guessInput").disabled = true;
    document.querySelector("button").disabled = true;
    document.getElementById("restartBtn").style.display = "inline-block";
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = maxAttempts;

    document.getElementById("guessInput").disabled = false;
    document.querySelector("button").disabled = false;
    document.getElementById("restartBtn").style.display = "none";

    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent =
        "Attempts left: " + attemptsLeft;
}
