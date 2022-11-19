const express = require("express");
const app = express();

const middleware = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  console.log(method, url, date);
  res.send("middleware");
  next();
};

app.get("/", middleware, (req, res) => {
  res.send("home");
});

app.get("/about", middleware, (req, res) => {
  res.send("about");
});

app.listen(5000, () => {
  console.log("running on port 5000...");
});
