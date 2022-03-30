//import statements
const express = require("express");
const mySql = require("mysql");
//config
const port = process.env.PORT || 8000;
const db = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "immo1111",
  database: "student",
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
//app start
const app = express();

//app middlewares
app.use(express.json());

//app routes
app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/studentList", (req, res) => {
  const query = "SELECT * FROM student_data";
  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});
app.post("/addStudent", (req, res) => {
  const query = "INSERT INTO student_data values(?,?,?,?)";
  const { id, name, address, email } = req.body;
  db.query(query, [id, name, address, email], (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.status(201).send("Student added successfully");
    }
  });
});
app.put("/updateStudent/:id", (req, res) => {
  const query = "UPDATE student_data SET name=?, address=?, email=? WHERE id=?";
  const { name, address, email } = req.body;
  db.query(query, [name, address, email, req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.status(201).send("Student updated successfully");
    }
  });
});
app.delete("/deleteStudent/:id", (req, res) => {
  const query = "DELETE FROM student_data WHERE id=?";
  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      res.status(201).send("Student deleted successfully");
    }
  });
});
//app listen
app.listen(port, () => console.log(`Server started at port ${port}`));
