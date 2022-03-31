const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
