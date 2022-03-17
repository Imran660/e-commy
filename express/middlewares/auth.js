exports.checkUserMiddle = (req, res, next) => {
  const { username, password } = req.query;
  if (username == "Imran" && password == "admin") {
    req.message =
      "user is authenticated, you can now access the cart data from database";
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
