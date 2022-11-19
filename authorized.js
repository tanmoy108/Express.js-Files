const authorized = (req, res, next) => {
  const { user } = req.query;
  //http://localhost:5000/?user=tanmoy
  if (user === "tanmoy") {
    req.user = { name: "tanmoy", id: 1 };
    next();
  } else {
    res.status(401).send("unauthorized");
    console.log(req.url);
  }
};

module.exports = authorized;
