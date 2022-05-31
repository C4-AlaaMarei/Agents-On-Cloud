const express = require("express");
const {
    createNewBook,
    deleteBookById,
    getAllBooks,

} = require("../controllers/book");
const { authentication } = require("../middleware/authentication");

const bookRouter = express.Router();

bookRouter.post("/",createNewBook);
bookRouter.delete("/:id",deleteBookById);
bookRouter.get("/",getAllBooks);



module.exports = bookRouter;
