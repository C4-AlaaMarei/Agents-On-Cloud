const express = require("express");
const {
  joinDiscussRoom,
  unJoinDiscussRoom,


} = require("../controllers/followingRoom");

const followingRoomRouter = express.Router();
const { authentication } = require("../middleware/authentication");


followingRoomRouter.post("/:id",  joinDiscussRoom);
followingRoomRouter.delete("/:id",  unJoinDiscussRoom);

module.exports = followingRoomRouter;

