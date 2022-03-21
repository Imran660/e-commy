//import statements
const express = require("express");
const cookie = require("cookie-parser");

//config
const port = process.env.PORT || 8000;
const sessionIds = [451, 785, 967];
//app start
const app = express();
//app middleware
app.use(cookie());

const handleCheckUser = (req, res, next) => {
  const { sessionId } = req.cookies;
  if (sessionIds.includes(parseInt(sessionId))) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
//app route
app.get("/", (req, res) => {
  res.send("Hello cookies");
});

app.get("/getAllCookies", handleCheckUser, (req, res) => {
  console.log(req.cookies);
  res.json(req.cookies);
});

app.get("/createCookie", handleCheckUser, (req, res) => {
  try {
    const { cookieName, cookieValue } = req.query;
    res.cookie(cookieName, cookieValue).send("Cookie created");
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});
app.get("/clearCookie/:name", (req, res) => {
  const { name } = req.params;
  res.clearCookie(name).send(`${name} cookie cleared`);
});

app.get("/auth", (req, res) => {
  const { username, password } = req.query;
  if (username == "admin" && password == "12345") {
    res.cookie("sessionId", sessionIds[0]).send("Authenticated");
  } else {
    res.status(401).send("Unauthorized");
  }
});

//app listen
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
