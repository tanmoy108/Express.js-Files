const express = require("express");
const { people } = require("./data"); // for app.post("/login")
const app = express(); // for app.post("/api/people")

//post er jonno egulo use kora
app.use(express.static("./post_public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//get method
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, datas: people });
});

//post method
app.post("/login", (req, res) => {
  console.log(req.body); // undefined asbe jodi na tumi app.use(express.urlencoded({extended:false})) eta add koro.
  const { firstName } = req.body;
  if (firstName) {
    res.send(`welcome ${firstName}`);
  }
  res.status(401).send("please provide name");
});

app.post("/api/people", (req, res) => {
  const { fname } = req.body;
  if (!fname) {
    res.status(401).json({ success: false, msg: "please provide name" });
  }
  res.status(200).json({ success: true, persons: fname });
});

//test in postman
app.post("/api/postman/people", (req, res) => {
  const { fname } = req.body;
  if (!fname) {
    res.status(401).json({ success: false, msg: "please provide name" });
  }
  res.status(200).json({ success: true, datas: [...people, fname] });
});

//put[test in postman]
app.put("/api/people/:id", (req, res) => {
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
app.delete("/api/people/:id", (req, res) => {
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

app.listen(5000, () => {
  console.log("running on port 5000...");
});
