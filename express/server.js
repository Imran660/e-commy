//import statements
const express = require("express");
const dotenv = require("dotenv");
const studentRouter = require("./routes/student.js");
//config
dotenv.config();
const port = process.env.PORT || 8000;

//app start
const app = express();

//middlewares
app.use(express.json()); //  convert incoming request body to json
app.use("/student", studentRouter);

//routes
app.get("/", (req, res) => {
  res.send("Hello home updated");
});
//listen
app.listen(port, () => console.log(`server started at port ${port}`));
