// process.env.UV_THREADPOOL_SIZE = 6;
// const crypto = require("crypto");

// const start = Date.now();

// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("1:", Date.now() - start);
// });

// crypto.pbkdf2("a45", "b", 100000, 512, "sha512", () => {
//   console.log("2:", Date.now() - start);
// });

// crypto.pbkdf2("a45", "b", 100000, 512, "sha512", () => {
//   console.log("3:", Date.now() - start);
// });

// crypto.pbkdf2("a45", "b", 100000, 512, "sha512", () => {
//   console.log("4:", Date.now() - start);
// });

crypto.pbkdf2("a45", "b", 100000, 512, "sha512", () => {
  console.log("5:", Date.now() - start);
});

let a = 5;
let b = 6;

console.log(a + b);
