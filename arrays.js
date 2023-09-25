const number = [1, 2, 3, 4, 5];

number.forEach((number) => {
  console.log(number);
});

number.push(60);
console.log(number);
const indexOfFive = number.indexOf(2);
console.log(indexOfFive);

number.splice(indexOfFive, 3);
console.log(number);
