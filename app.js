const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");

const app = express();
const port = 8888;

app.use(cors());
app.use(cookieParser());

app.get("/login", (req, res) => {
  res.cookie("name", "foobar");
  res.status(200).send("You got a cookie!");
});

app.get("/hello", (req, res) => {
  if (req.cookies.name !== undefined) {
    res.status(200).send(`Welcome, ${req.cookies.name}!`);
  } else {
    res.status(403).send("Come back with cookies!");
  }
});

app.listen(port, () => {
  console.log("Express server started on port ", port);
});
