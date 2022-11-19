const express = require("express");
const middlewares = require("./middlewares");
const app = express();

app.use(middlewares); // sob gulote apply hobe .. app.use('middlewares') dile shob jaigate apply hobe . app.use("/api", middlewares) api jegulote ace sudu oigulote apply hobe.  /api jekane tahkbe oikane kaj korbe jemon /api/about === /about

app.get("/", (req, res) => {
  res.send("home");
});

//app.use(middlewares); // eikane dile nicer gulote apply hobe . upore home e apply hobe na .
app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/product", (req, res) => {
  res.send("product");
});

app.listen(5000, () => {
  console.log("running on port 5000...");
});
