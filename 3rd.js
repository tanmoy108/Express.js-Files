const express = require("express");
const app = express();
const {job} = require('./data');

app.use(express.static('./public'));

app.get('/api/job',(req,res)=>{
  console.log(req.url);
  const jobPosition = job.map((jobs)=>{
    const {id,order,title,dates,duties,company} = jobs;
    return{company,title,dates,duties};
  })
  res.json(jobPosition);
})

app.listen(5000, () => {
  console.log("running on port 5000...");
});
