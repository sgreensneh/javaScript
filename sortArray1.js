let list1 = [1, 3, 4, 5];
let list2 = [2, 6, 7, 8];

let list3 = [...list1, ...list2];
list3.sort();

console.log(list3);

console.log("A" === "B");

const s = {
  d: "su",
};

delete s.d;
console.log(s);

const brand = (brand) => ({
  brand: "brand",
  website: `www.${brand}.com`,
});

console.log(JSON.stringify(brand(), null, 1));
