function guess() {
  let head = document.querySelector(".head");
  var inputElement = document.querySelector(".getValue");
  let randomNumber = Math.floor(Math.random() * 3);
  var value = inputElement.value;
  if (value == randomNumber) {
    head.textContent = "YOU WON";
  } else {
    head.textContent = "YOU LOOSE";
}
}
