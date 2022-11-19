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

app.listen(5000, () => {
  console.log("running on port 5000...");
});
