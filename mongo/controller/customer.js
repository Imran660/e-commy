const Customer = require("../modals/customer");
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.send(customers);
  } catch (e) {
    console.log(e);
  }
};

exports.addCustomer = async (req, res) => {
  try {
    console.log(req.body);
    const customer = await new Customer(req.body).save();
    console.log(customer);
    res.status(201).send("Customer added successfully");
  } catch (e) {
    console.log(e);
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOneAndUpdate(
      { email: req.params.email },
      { $set: { ...req.body } },
      {
        new: true,
      }
    );
    res.send(customer);
  } catch (e) {
    console.log(e);
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOneAndDelete({
      email: req.params.email,
    });
    res.send("Customer deleted successfully");
  } catch (e) {
    console.log(e);
  }
};
