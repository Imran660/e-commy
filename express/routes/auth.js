const express = require("express");
const { getCarts } = require("../controller/cart");
const { checkUserMiddle } = require("../middlewares/auth");

const Router = express.Router();

// four types of request
// GET - read  (no body) (params,query)
// POST - create   (body,params,query)
// PUT, PATCH - update  (body,params,query)
// DELETE - delete     (body,params,query)
Router.get("/checkUser", checkUserMiddle, getCarts);

module.exports = Router;
