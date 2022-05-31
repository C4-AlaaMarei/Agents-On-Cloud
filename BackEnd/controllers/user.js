const bcrypt = require("bcrypt");
const connection = require("../database/db");

const secretSalt = process.env.SALT;
require("dotenv").config();

// This function to sign up new user .
const createNewUser = async (req, res) => {
  const { userName, email, password ,role_id}= req.body;

  const hashingPass = await bcrypt.hash(password, 5);

  const query = `INSERT INTO users ( user_name, email, password, role_id) VALUES (?,?,?,?)`;
  const data = [userName, email, hashingPass,role_id];

  connection.query(query,data,  (err, results) => {
    if (err) {
      console.log(err)

      return res.status(409).json({
        success: false,
        message: "server Error",
        err: err,

      });

    }

    res.status(200).json({
      success: true,
      message: "Success user Added",
      results: results,
    });
  });
};

// This function to get user by id.
const getUserById = (req, res) => {
  const id = req.query.id;
  const query = `SELECT * FROM user WHERE id=?`;
  const data = [id];

  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    }
    if (results.length == 0) {
      return res.status(404).json({
        success: false,
        massage: "The user Not found",
      });
    }
    res.status(200).json({
      success: true,
      massage: `The user ${id}`,
      results: results,
    });
  });
};



module.exports = {
  createNewUser,
  getUserById,
 
};
