const express = require("express");
const {
  createNewDiscussRoom,
  deleteDiscussRoomById,
  getAllDiscussRoom,

} = require("../controllers/discussRoom");

const discussRoomRouter = express.Router();
const { authentication } = require("../middleware/authentication");

discussRoomRouter.post("/:id",  createNewDiscussRoom);
discussRoomRouter.delete("/:id",  deleteDiscussRoomById);

discussRoomRouter.get("/:id",  getAllDiscussRoom);

module.exports = discussRoomRouter;

