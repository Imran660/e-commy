const express = require("express");
const {
  getAllCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controller/customer");

const Router = express.Router();

Router.get("/list", getAllCustomers);
Router.post("/add", addCustomer);
Router.put("/modify/:email", updateCustomer);
Router.delete("/delete/:email", deleteCustomer);

module.exports = Router;
