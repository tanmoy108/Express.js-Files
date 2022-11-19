const express = require("express");
const router = express.Router();

//post method
router.post("/", (req, res) => {
  console.log(req.body); // undefined asbe jodi na tumi app.use(express.urlencoded({extended:false})) eta add koro.
  const { firstName } = req.body;
  if (firstName) {
    res.send(`welcome ${firstName}`);
  }
  res.status(401).send("please provide name");
});
module.exports =router;