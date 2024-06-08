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
