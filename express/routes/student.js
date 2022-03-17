const express = require("express");
const {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/student");
const { checkUserMiddle } = require("../middlewares/auth");

const Router = express.Router();

Router.get("/getAllStudents", checkUserMiddle, getAllStudents);
Router.post("/addStudent", checkUserMiddle, addStudent);
Router.put("/updateStudent/:id", checkUserMiddle, updateStudent);
Router.delete("/deleteStudent/:id", checkUserMiddle, deleteStudent);

module.exports = Router;
