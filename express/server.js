//import statements
const express = require("express");
const dotenv = require("dotenv");
const studentRouter = require("./routes/student.js");
const { checkUserMiddle } = require("./middlewares/auth.js");
//config
dotenv.config(); // To read env variables from .env file
const port = process.env.PORT || 8000;

//app start
const app = express();

//middlewares
app.set("view engine", "hbs");

//routes
app.get("/", (req, res) => {
  res.send("hello home route");
});

app.get("/user", checkUserMiddle, (req, res) => {
  res.render("index", {
    username: req.query.username,
    password: req.query.password,
  });
});

app.get("/about", checkUser, (req, res) => {
  res.render("about", {
    username: req.query.username,
    password: req.query.password,
  });
});
//listen
app.listen(port, () => console.log(`server started at port ${port}`));
