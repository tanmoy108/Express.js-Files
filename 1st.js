const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("home page");
});
app.get("/about", (req, res) => {
  res.status(200).send("about page");
});
app.all("*", (req, res) => {
  res.status(404).send("<h1>not found</h1>");
});

app.listen(5000, () => {
  console.log("running on port 5000...");
});
