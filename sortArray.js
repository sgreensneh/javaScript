let arr1 = ["0524", "0", "0001112241", "24"];
const arr = (arr1) => {
  for (const i of arr1) {
    console.log(i.length);
  }
};
arr(arr1);

const drinks = [
  {
    name: "bullet",
    price: 200,
    brand: "energy drinks company",
  },
  {
    name: "Drink 1",
    price: 5,
    brand: "Brand A",
  },
  {
    name: "Drink 2",
    price: 6,
    brand: "Brand B",
  },
  {
    name: "Drink 3",
    price: 3,
    brand: "Brand C",
  },
  {
    name: "Drink 4",
    price: 9,
    brand: "Brand D",
  },
  {
    name: "Drink 5",
    price: 7,
    brand: "Brand E",
  },
  {
    name: "Drink 6",
    price: 2,
    brand: "Brand A",
  },
  {
    name: "Drink 7",
    price: 8,
    brand: "Brand B",
  },
  {
    name: "Drink 8",
    price: 4,
    brand: "Brand C",
  },
  {
    name: "Drink 9",
    price: 1,
    brand: "Brand D",
  },
  {
    name: "Drink 10",
    price: 5,
    brand: "Brand E",
  },
  {
    name: "Drink 11",
    price: 3,
    brand: "Brand A",
  },
  {
    name: "Drink 12",
    price: 7,
    brand: "Brand B",
  },
  {
    name: "Drink 13",
    price: 2,
    brand: "Brand C",
  },
  {
    name: "Drink 14",
    price: 9,
    brand: "Brand D",
  },
  {
    name: "Drink 15",
    price: 6,
    brand: "Brand E",
  },
  {
    name: "Drink 16",
    price: 4,
    brand: "Brand A",
  },
  {
    name: "Drink 17",
    price: 1,
    brand: "Brand B",
  },
  {
    name: "Drink 18",
    price: 8,
    brand: "Brand C",
  },
  {
    name: "Drink 19",
    price: 5,
    brand: "Brand D",
  },
  {
    name: "Drink 20",
    price: 3,
    brand: "Brand E",
  },
  {
    name: "Drink 21",
    price: 9,
    brand: "Brand A",
  },
  {
    name: "Drink 22",
    price: 2,
    brand: "Brand B",
  },
  {
    name: "Drink 23",
    price: 7,
    brand: "Brand C",
  },
  {
    name: "Drink 24",
    price: 1,
    brand: "Brand D",
  },
  {
    name: "Drink 25",
    price: 6,
    brand: "Brand E",
  },
  {
    name: "Drink 26",
    price: 4,
    brand: "Brand A",
  },
  {
    name: "Drink 27",
    price: 8,
    brand: "Brand B",
  },
  {
    name: "Drink 28",
    price: 3,
    brand: "Brand C",
  },
  {
    name: "Drink 29",
    price: 65,
    brand: "Brand F",
  },
];

console.log(drinks.sort((a, b) => a.price - b.price));

const age = (age) => {
  return (mil = age * 31536000000);
};
console.log(age(20));
