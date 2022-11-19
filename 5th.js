const express = require("express");
const app = express();
const { job } = require("./data");

app.use(express.static("./public"));

app.get("/api/job", (req, res) => {
  console.log(req.url);
  const jobPosition = job.map((jobs) => {
    const { id, order, title, dates, duties, company } = jobs;
    return { company, title, dates, duties };
  });
  res.json(jobPosition);
});
app.get("/api/job/:jobId", (req, res) => {
  console.log(req.url);
  console.log(req.params);
  const { jobId } = req.params;

  const singleJobPosition = job.find((jobs) => jobs.id === Number(jobId));
  res.json(singleJobPosition);
});

app.get("/api/job/v/query", (req, res) => {
  //http://localhost:5000/api/job/v/query?search=Engineering&limit=2
  console.log(req.query);
  console.log(req.query.name);
  const { search, limit } = req.query;
  var fJob = [...job];

  if (search) {
    fJob = fJob.filter((product) => {
      return product.title.startsWith(search);
    });
  }

  if (limit) {
    fJob = fJob.slice(0, Number(limit));
    console.log(Number(limit));
  }
  if (fJob.length < 1) {
    return res.status(200).json("Sorry!!!");
  }

  res.status(200).json(fJob);
});

app.listen(5000, () => {
  console.log("running on port 5000...");
});
