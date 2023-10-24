let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

let userInput = document.querySelector('.user--input');
let btnGuessNumber = document.querySelector('.btn--guess-number');
let errorMessage = document.querySelector('.error--message')
let guessMessage = document.querySelector('.guess--message');
let previousGuessesMsg = document.querySelector('.prev--guess-msg')
let remainingGuessesMsg = document.querySelector('.rem--guess-msg')
let startPara = document.querySelector('.para')

const p = document.createElement('p');
let previousGuesses = [];
let playGame = true;
let numberOfGuesses = 1;

if (playGame) {
    btnGuessNumber.addEventListener('click', (e) => {
        e.preventDefault();
        let inputValue = parseInt(userInput.value);
        checkInputValidation(inputValue);
    });
}

const checkInputValidation = (input) => {
    if (isNaN(input)) {
        errorMessage.textContent = "Please enter number!"
    } else if (input < 1) {
        errorMessage.textContent = "Please enter positive number";
    } else if (input > 100) {
        errorMessage.textContent = "Please enter between 1 to 100";
    }
    else {
        previousGuesses.push(input);
        if (numberOfGuesses === 11) {
            displayGuess(input)
            guessMessage.innerText = `Game over!! random number was ${randomNumber}`;
            endGame();
        } else {
            displayGuess(input);
            checkGuesses(input)
        }
    }
}
const displayGuess = (guess) => {
    userInput.value = '';
    previousGuessesMsg.innerHTML += `${guess} -`;
    numberOfGuesses++;
    remainingGuessesMsg.innerText = `${11 - numberOfGuesses}`
}

const checkGuesses = (input) => {
    if (input == randomNumber) {
        guessMessage.textContent = "Your guess is correct";
        endGame();
    } else if (input < randomNumber) {
        guessMessage.textContent = "To low try again!";
    } else if (input > randomNumber) {
        guessMessage.textContent = "To high! try again! "
    }
}

const endGame = () => {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button class=new--game>New Game</button>`
    startPara.appendChild(p)
    newGame()
}

const newGame = () => {
    const newGameBtn = document.querySelector('.new--game');
    newGameBtn.addEventListener('click', () => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuesses = [];
        numberOfGuesses = 1;
        previousGuessesMsg.innerHTML = ''
        remainingGuessesMsg.innerHTML = `${11 - numberOfGuesses}`;
        userInput.removeAttribute('disabled');
        startPara.removeChild(p)
        playGame = true
    });
}



