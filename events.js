const events = require("events");

const myEventEmitter = new events();

// myEventEmitter.on("myFirstEvent", () => {
//   console.log("First event is triggered");
// });

// myEventEmitter.emit("myFirstEvent");

// myEventEmitter.on("welcome", (data) => {
//   console.log(data);
// });
// myEventEmitter.on("hello", () => {
//   console.log("hello event");
//   myEventEmitter.emit("welcome", [
//     "Welcome to the event",
//     "second arguments for this event",
//   ]);
// });

// myEventEmitter.emit("hello");

// myEventEmitter.once("once event", (data) => {
//   console.log(data);
// });

// myEventEmitter.prependOnceListener("once event", (data) => {
//   console.log("prependOnceListener", data);
// });
// myEventEmitter.emit("once event", "once event data");

// myEventEmitter.on("error", (err) => {
//   console.log(err);
// });

// myEventEmitter.emit("error", new Error("error in event"));

myEventEmitter.on("data", (data) => {
  console.log(data);
});
myEventEmitter.on("connection", (data) => {
  if (data[0] == "admin" && data[1] == "admin") {
    console.log("connected successfully");
    myEventEmitter.emit("data", "Data received");
  } else {
    myEventEmitter.emit("error", new Error("Invalid credentials"));
  }
});

myEventEmitter.emit("connection", ["admin", "admin01"]);
