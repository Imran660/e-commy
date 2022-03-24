const fs = require("fs");

const readStream = fs.createReadStream("./message.txt", "utf8");
const writeStream = fs.createWriteStream("./message2.txt");
let chunksCount = 0;
// readStream.on("data", (data) => {
//   console.log("chunks of data received");
//   chunksCount++;
//   writeStream.write(data);
//   console.log(chunksCount);
// });

readStream.pipe(writeStream);
