const express = require("express");
const {
  addToReadingList,
  removeFromReadingList,
  getAllInReadingList,

} = require("../controllers/readingList");

const readingListRouter = express.Router();
const { authentication } = require("../middleware/authentication");

readingListRouter.post("/:id",  addToReadingList);
readingListRouter.delete("/:id",  removeFromReadingList);

readingListRouter.get("/",  getAllInReadingList);

module.exports = readingListRouter;

