// console.log("Hey asynchronous");
// setTimeout(() => {
//   console.log("after 2s");
// }, 2000);

// console.log("After timeout");

// const result = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([1, 5, 10]);
//   }, 2000);
// });

// async function getData() {
//   const data = await result;
//   console.log(data.length);
// }

function getDataAfterDelay(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user == "admin") resolve([1, 5, 10]);
      else reject("User not found");
    }, 2000);
  });
}

getDataAfterDelay("admins")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
