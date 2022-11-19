const express = require("express");
const app = express(); // for app.post("/api/people")
const people = require('./routes/people'); // for express router.
const auth = require('./routes/auth'); // for express router 
//post er jonno egulo use kora
app.use(express.static("./post_public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/people',people) // for express router. (D:\web\node\node3\routes\people.js)
app.use('/login',auth); //for express router . (D:\web\node\node3\routes\auth.js)


app.listen(5000, () => {
  console.log("running on port 5000...");
});
