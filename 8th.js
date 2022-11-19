const express = require("express");
const authorized = require("./authorized");
const middlewares = require("./middlewares");
// const morgan = require("morgan");
const app = express();

app.use([middlewares, authorized]); // our own
// app.use(express.static('./public')); // expres
// app.use(morgan('tiny'));//third party
const show = (req) => {
  console.log(req.user);
};

app.get("/", (req, res) => {
  res.send("home");
  show(req);
});

app.get("/about", (req, res) => {
  res.send("about");
  show(req);
});

app.get("/api/product", (req, res) => {
  res.send("product");
  show(req);
});

app.listen(5000, () => {
  console.log("running on port 5000...");
});
