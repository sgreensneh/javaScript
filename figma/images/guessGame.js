// let click = document.querySelector(".click");
// let scanner = document.querySelector(".userInput");
// let random = Math.floor(Math.random() * 20) + 1;

// function generateRandomNumber() {
//   console.log(random);
//   let userInput = scanner.value;
//   if (userInput == random) {
//     click.textContent = "you won";
//     alert("You won!");
//   } else if (userInput > random) {
//     click.textContent = "Number too high";
//   } else {
//     click.textContent = "Number too low";
//   }
// }

let userInputElement = document.querySelector(".userInput");
let playButton = document.querySelector(".playButton");
let click = document.querySelector(".click");

let userInput = null;
let numberOfTries = 5;

let random = Math.floor(Math.random() * 20) + 1;

userInputElement.addEventListener("change", (e) => {
  userInput = Number(e.target.value);
});

playButton.addEventListener("click", () => {
  generateRandomNumber();
});

function generateRandomNumber() {
  console.log(random);
  numberOfTries--;
  if (numberOfTries > 0) {
    if (userInput == random) {
      click.textContent = "you won";
    } else if (userInput > random) {
      click.textContent = "Number too high";
    } else {
      click.textContent = "Number too low";
    }
  } else {
    click.textContent = "ran out of tries";
  }
}
