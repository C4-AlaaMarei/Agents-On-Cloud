




const connection = require("../database/db");

const joinDiscussRoom = async (req, res) => {

  const { id } = req.params;

  const user_id = req.token.userId;

  const query = `INSERT INTO following_rooms (discussion_room_id,user_id) VALUES (?,?)`;

  const data = [id,user_id];

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
      message: "Success join",
      results: results,
    });
  });
};



const unJoinDiscussRoom = (req, res) => {
    const { id } = req.params;

    const user_id = req.token.userId;

  const query = `DELETE FROM following_rooms WHERE discussion_room_id = ? && user_id = ?`;
  const data = [id,user_id];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: ` No room with id ${id}`,
      });
    }
    res.status(200).json({
      success: true,
      message: `Succeeded to delete room with id ${id}`,
      result: result,
    });
  });
};


module.exports = {
    joinDiscussRoom,
  unJoinDiscussRoom,
};
