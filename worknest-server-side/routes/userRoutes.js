const express = require("express");
const router = express.Router();
const {
  getUser,
  getSingleUser,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/userController");

// get method for all users in database
router.get("/users", getUser);

// get single user by id
router.get("/users/:id", getSingleUser);

// create new user
router.post("/users", createUser);

// update user info by id
router.put("/users/:id", updateUser);

// delete a user by id
router.delete("/users/:id", deleteUser);

module.exports = router;
