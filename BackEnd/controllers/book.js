const connection = require("../database/db");

const createNewBook = async (req, res) => {
  // const roleId = req.token.role_id;

  const { book_title } = req.body;

  const query = `INSERT INTO library (book_title) VALUES (?)`;

  const data = [book_title];

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



const deleteBookById = (req, res) => {
  // const user_id = req.token.userId;

  const { id } = req.params;

  const query = `DELETE FROM library WHERE id = ?`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: ` No tweet with id ${id}`,
      });
    }
    res.status(200).json({
      success: true,
      message: `Succeeded to delete book with id ${id}`,
      result: result,
    });
  });
};


module.exports = {
  createNewBook,
 
  deleteBookById,
};
