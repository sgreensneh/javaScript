import axios from "axios";

// axios
//   .get("https://api.chucknorris.io/jokes/random")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const fetchData = async () => {
  try {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
