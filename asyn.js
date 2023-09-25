const customers = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 1_000_000_000) i++;
    resolve([
      { customerId: 2, customerAdress: "Lagos" },
      { customerId: 4, customerAdress: "Abuja" },
    ]);
  });
});

const persons = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 1_000_000_000) i++;
    resolve([
      { name: "sgreen", age: 25 },
      { name: "zita", age: 5 },
    ]);
  });
});

// const fetch = () => {
//   customers
//     .then((customers) => {
//       person
//         .then((persons) => {
//           console.log(customers);
//           console.log(persons);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const fetch = async () => {
//   try {
//     const c = await customers;
//     const p = await persons;

//     console.log(c);
//     console.log(p);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetch = async () => {
//   Promise.all([customers, persons])
//     .then((value) => {
//       const [c, p] = value;
//       console.log(c);
//       console.log(p);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const fetch = async () => {
  try {
    const value = await Promise.all([customers, persons]);
    const [c, p] = value;
    console.log(c);
    console.log(p);
  } catch (error) {
    console.log(error);
  }
};

fetch();
