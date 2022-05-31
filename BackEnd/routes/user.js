const express = require("express");
const {
  createNewUser,
  getUserById,
 
} = require("../controllers/user");
const userRouter = express.Router();

userRouter.post("/", createNewUser);
userRouter.get("/", getUserById);


module.exports = userRouter;
