const express = require("express");
const {
    createNewBook,
    deleteBookById,


} = require("../controllers/book");
const { authentication } = require("../middleware/authentication");

const bookRouter = express.Router();

bookRouter.post("/",createNewBook);
bookRouter.delete("/:id",deleteBookById);



module.exports = bookRouter;
