const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./public")); // for this add style , js etc .

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./pin/index.html"));
// }); emon dea lagbe na jodi index.html file ta public e move kori . tahle default thakbe . 

app.all("*", (req, res) => {
  res.status(404).send("<h1>not found</h1>");
});

app.listen(5000, () => {
  console.log("running on ports 5000...");
});
