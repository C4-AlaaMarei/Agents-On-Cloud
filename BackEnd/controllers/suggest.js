const connection = require("../database/db");

const suggestBook = async (req, res) => {

  const userId = req.token.userId;


  const { book_suggest,author } = req.body;

  const query = `INSERT INTO suggestions (book_suggest,author,user_id ) VALUES (?,?,?)`;

  const data = [book_suggest,author,userId];

  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(409).json({
        success: false,
        message: "server Error",
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      message: "Success book Added",
      results: results,
    });
  });
};



const getSuggestedBooks = (req, res) => {
 

  const query = `SELECT * FROM suggestions`;
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    }     

    if (!result) {
      return res.status(200).json({
        success: false,
        message: `No books Yet`,
      });
    }
    res.status(200).json({
      success: true,
      message: `all books available`,
      books: result,
    });
  });
};

module.exports = {
  suggestBook,
  getSuggestedBooks
};

