// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Sucessful");
//   }, 3000);

//   setTimeout(() => {
//     reject("Bad network");
//   }, 1000);
// });

console.log("SYNCHRONOUS-1");
const promise = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 1_000_000_000) {
      i++;
    }
    resolve("Sucessful");
  });
});

promise
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finish processing...");
  });

console.log("SYNCHRONOUS-2");
