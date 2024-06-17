# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project 1 Solution

```javascript
console.log("Himanshu");
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    var targetColor = e.target.id;
    switch (targetColor) {
      case "grey":
        body.style.backgroundColor = targetColor;
      case "white":
        body.style.backgroundColor = targetColor;
      case "blue":
        body.style.backgroundColor = targetColor;
      case "yellow":
        body.style.backgroundColor = targetColor;
      case "pink":
        body.style.backgroundColor = targetColor;
    }
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
  });
});
```

## Project 2 solution

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if ((height === "" || height < 0, isNaN(height))) {
    results.innerHTML = `Please givr valid height`;
  } else if ((weight === "" || weight < 0, isNaN(weight))) {
    results.innerHTML = `Please givr valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let msg = "";
    if (bmi < 18.6) {
      msg = "Under weight";
    } else if (bmi > 24.9) {
      msg = "Over weight";
    } else {
      msg = "Normal Range";
    }
    results.innerHTML = `<span>${bmi} </br> ${msg}</span>`;
  }
});
```

## Project 3 solution

```javascript
const clock = document.getElementById("clock");

setInterval(() => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  clock.innerHTML = time;
}, 1000);
```

## Project 4 solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(` You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="newGame" style="color: red;">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
```

## Project 6 solution

```javascript
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let x;

document.querySelector("#start").addEventListener("click", () => {
  if (x == null) {
    x = setInterval(() => {
      document.querySelector("body").style.backgroundColor = getRandomColor();
    }, 1000);
  }
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(x);
  x = null;
});
```
