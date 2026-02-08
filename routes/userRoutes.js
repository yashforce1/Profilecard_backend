const express = require("express");
const router = express.Router();

const { addUser, getUsers } = require("../controllers/userController");


router.get("/test", (req, res) => {
    res.send("User route working ✅");
  });
  
router.post("/user", addUser);
router.get("/users", getUsers);

module.exports = router;
