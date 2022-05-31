const connection = require("../database/db");

const createNewDiscussRoom = async (req, res) => {
  // const user_id = req.token.userId;
  const { id } = req.params;

  const { discussion_room} = req.body;

  const query = `INSERT INTO discussion_rooms (book_id, discussion_room) VALUES (?,?)`;

  const data = [id,discussion_room];

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
      message: "Success discussion room Added",
      results: results,
    });
  });
};



const deleteDiscussRoomById = (req, res) => {
  // const user_id = req.token.userId;

  const { id } = req.params;

  const query = `DELETE FROM discussion_rooms WHERE id = ?`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: ` No discussion room with id ${id}`,
      });
    }
    res.status(200).json({
      success: true,
      message: `Succeeded to delete discussion room with id ${id}`,
      result: result,
    });
  });
};



const getAllDiscussRoom = (req, res) => {
  // console.log(req.token)

  // const user_id = req.token.userId;
  // const data = [user_id];
  const { id } = req.params;
  const data = [id];

  const query = `SELECT * FROM discussion_rooms WHERE book_id = ?`;
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
        message: `No discussion Yet`,
      });
    }
    res.status(200).json({
      success: true,
      message: `all discussion rooms available`,
      books: result,
    });
  });
};

module.exports = {
  createNewDiscussRoom,
  getAllDiscussRoom,
  deleteDiscussRoomById,
};
