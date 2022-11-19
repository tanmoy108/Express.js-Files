const express = require("express");
const router = express.Router();
const { people } = require("../data"); // for app.post("/login")

//get method
router.get("/", (req, res) => {
  res.status(200).json({ success: true, datas: people });
});

router.post("/", (req, res) => {
  const { fname } = req.body;
  if (!fname) {
    res.status(401).json({ success: false, msg: "please provide name" });
  }
  res.status(200).json({ success: true, persons: fname });
});

//test in postman
router.post("/postman", (req, res) => {
  const { fname } = req.body;
  if (!fname) {
    res.status(401).json({ success: false, msg: "please provide name" });
  }
  res.status(200).json({ success: true, datas: [...people, fname] });
});

//put[test in postman]
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const personNumber = people.find((person) => person.id === Number(id));

  if (!personNumber) {
    return res
      .status(401)
      .json({ success: false, msg: "person doesn't exist" });
  }

  const NewAddPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: NewAddPeople });
});

//delete [test in postman]
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const personNumber = people.find((person) => person.id === Number(id));

  if (!personNumber) {
    return res
      .status(401)
      .json({ success: false, msg: "person doesn't exist" });
  }

  const NewPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: NewPeople });
});

module.exports = router;
