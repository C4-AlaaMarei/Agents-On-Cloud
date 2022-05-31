const express = require("express");
const {
    suggestBook,
    getSuggestedBooks,

} = require("../controllers/suggest");
const { authentication } = require("../middleware/authentication");

const suggestRouter = express.Router();

suggestRouter.post("/",suggestBook);
suggestRouter.get("/",getSuggestedBooks);



module.exports = suggestRouter;
