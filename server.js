//import statements
import express from "express";
import dotenv from "dotenv";
//config
dotenv.config();
const port = process.env.PORT || 8000;
//app start
const app = express();

//middlewares

//routes
app.get("/", (req, res) => {
  res.send("Hello home updated");
});

//listen
app.listen(port, () => console.log(`server started at port ${port}`));
