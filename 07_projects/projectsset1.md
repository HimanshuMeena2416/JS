# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 1

````javascript
console.log("Himanshu")```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    var targetColor = e.target.id;
    switch (targetColor) {
      case 'grey':
        body.style.backgroundColor = targetColor;
      case 'white':
        body.style.backgroundColor = targetColor;
      case 'blue':
        body.style.backgroundColor = targetColor;
      case 'yellow':
        body.style.backgroundColor = targetColor;
      case 'pink':
        body.style.backgroundColor = targetColor;
    }
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
  });
});

````
