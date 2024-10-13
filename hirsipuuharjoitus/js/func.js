// words for the game and elements
const words = ["javascript", "hangman", "programming", "webdevelopment"];
let wordToGuess, maskedWord, guesses;
const inputField = document.querySelector("input");
const output = document.querySelector("output");
const guessCount = document.querySelector("span");

// starting a new game
function newGame() {
  wordToGuess = words[Math.floor(Math.random() * words.length)];
  maskedWord = "*".repeat(wordToGuess.length);
  guesses = 0;
  updateDisplay();
}

// updating the word and the number of guesses
function updateDisplay() {
  output.textContent = maskedWord;
  guessCount.textContent = guesses;
}

// checking the users guess and updating the masked word
function checkGuess(event) {
  event.preventDefault();
  const guess = inputField.value.toLowerCase();
  inputField.value = ""; // empty the guessing input

  // guessing logic
  if (guess.length === 1) {
    replaceFoundChars(guess);
  } else if (guess === wordToGuess) {
    win();
  } else {
    alert("Wrong guess! Try again.");
  }

  guesses++;
  updateDisplay();

  if (maskedWord === wordToGuess) {
    win();
  }
}

// replace the stars with right guessed characters
function replaceFoundChars(guess) {
  let newMaskedWord = "";
  for (let i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === guess) {
      newMaskedWord += guess;
    } else {
      newMaskedWord += maskedWord[i];
    }
  }
  maskedWord = newMaskedWord;
}

// info the user of the win
function win() {
  alert(`You guessed the word '${wordToGuess}' in ${guesses} guesses!`);
  newGame();
}

document.querySelector("form").addEventListener("submit", checkGuess);

newGame();
