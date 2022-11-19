const express = require("express");
const router = express.Router();
const {
  getMethod,
  postMethodAdd,
  postMethodPostman,
  putMethodUpdate,
  deleteMethod,
} = require("../controllers/people");

// //get method
// router.get("/", getMethod);

// router.post("/", postMethodAdd);

// //test in postman
// router.post("/postman", postMethodPostman);

// //put[test in postman]
// router.put("/:id", putMethodUpdate);

// //delete [test in postman]
// router.delete("/:id", deleteMethod);

router.route('/').get(getMethod).post(postMethodAdd);
router.route('/postman').post(postMethodPostman);
router.route('/:id').put(putMethodUpdate).delete(deleteMethod);

module.exports = router;
