const fs = require("fs").promises;

// fs.readFile("message.txt", "ascii")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("asynchronous way");

// const readFileFromMessage = async () => {
//   try {
//     console.log("code inside");
//     const data = await fs.readFile("message.txt", "ascii");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// readFileFromMessage();
// setTimeout(() => {
//   console.log("synchronous way   ");
// }, 50);

//writing a file
//asynchronous way
// fs.writeFile("message1.txt", "Hello World")
//   .then((res) => {
//     console.log("File written successfully");
//   })
//   .catch((err) => console.log(err));

// fs.appendFile("message1.txt", " new content")
//   .then(() => {
//     fs.readFile("message1.txt", "ascii")
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

//synchronous way
// const writeFileToMessage1 = async (content) => {
//   try {
//     console.log("code inside");
//     const data = await fs.appendFile("message1.txt", content);
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// writeFileToMessage1(" synchronous way");
