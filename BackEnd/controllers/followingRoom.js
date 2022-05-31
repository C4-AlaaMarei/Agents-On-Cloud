
const connection = require("../database/db");

const joinDiscussRoom =  (req, res) => {

  const { roomId } = req.params;
  const user = req.token.userId;

  // console.log(user)

  const query = `INSERT INTO following_rooms (discussion_room_id,user_id) VALUES (?,?)`;

  const data = [roomId,user];

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


// // This function creates new cart
// const createNewCart = (req, res) => {
//   const { item_id } = req.body;
//   const user_id = req.token.userId;
//   const query = `INSERT INTO carts (user_id,item_id) VALUE (?,?)`;
//   const data = [user_id, item_id];
//   connection.query(query, data, (err, result) => {
//     if (err) {
//       return res.status(500).json({
//         success: false,
//         message: `Server Error`,
//       });
//     }
//     res.status(201).json({
//       success: true,
//       message: `cart created`,
//       result: result,
//     });
//   });
// };



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
