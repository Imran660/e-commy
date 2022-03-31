//import statements
const express = require("express");
const customer = require("./routes/customer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//config
dotenv.config();
const port = process.env.PORT || 3000;
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connection success!.."))
  .catch((err) => console.log(`DB Connection Error ${err}`));

//app start
const app = express();
//middlewares
app.use(express.json());
app.use("/customer", customer);
//routes
app.get("/", (req, res) => {
  res.send("hello mongodb");
});

//listen
app.listen(port, () => console.log(`listening on port ${port}`));
