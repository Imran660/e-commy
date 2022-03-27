const data = [1, 4, 5, 8, 15, 16];

//handling future responses using callback mechanism
// callback is a function which will be called in future once the data got in our hand
const handleFetchData = (data) => {
  console.log(data);
};

// const fetchData = (callback) => {
//   // fetchData is a higher-order function as it's accepting function as a parameter
//   setTimeout(() => {
//     callback(data);
//   }, 2000);
// };

// fetchData(handleFetchData);

//promise is an object which will be resolved or rejected after some time, In simpler way it's a data which will be available in future
//handling future responses using promise mechanism
// const fetchData = (user) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (user == "admin") resolve(data);
//       else reject("Don't have access");
//     }, 2000);
//   });

// fetchData("admin")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//handling future responses using async/await mechanism

const result = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, 2000);
});

//synchronous code where we have used await keyword to wait ourself for the data to be available
async function fetchData() {
  try {
    const data = await result; //waitig for the promise to resolve or in simple way waited for the data to be arrived
    console.log(data.length);
  } catch (err) {
    console.log(err);
  }
}

fetchData();
