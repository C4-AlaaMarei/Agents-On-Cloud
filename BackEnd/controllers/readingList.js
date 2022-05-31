const connection = require("../database/db");



const addToReadingList = async (req, res) => {
  // const roleId = req.token.role_id;

  const { book_id } = req.params;
  const user = req.token.userId;

  // console.log(user)

  const query = `INSERT INTO reading_list (book_id,user_id) VALUES (?,?)`;

  const data = [book_id,user];

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
      message: "Success adding",
      results: results,
    });
  });
};



const removeFromReadingList = (req, res) => {
 
  // const user_id = req.token.userId;

  const { id } = req.params;

  const query = `DELETE FROM reading_list WHERE id = ?`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: ` No book with id ${id}`,
      });
    }
    res.status(200).json({
      success: true,
      message: `Succeeded to delete book with id ${id}`,
      result: result,
    });
  });

};


const getAllInReadingList = (req, res) => {
 
  const user = req.token.userId;

  const data = [user];

  const query = `SELECT * FROM reading_list WHERE id = ?`;
  connection.query(query,data, (err, result) => {
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
 
addToReadingList,
removeFromReadingList,
getAllInReadingList,

};
