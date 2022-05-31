const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../database/db");
require("dotenv").config();

// This function checks user login credentials
const login = (req, res) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  const query = `SELECT * FROM user WHERE email = ?`;
  const data = [email];


  connection.query(query, data, async (err, result) => {


    try {
      if (err) {
        return res.status(409).json({
          success: false,
          message: `The email not exists`,
          err: err,
        });
      }
      const valid = await bcrypt.compare(password, result[0].password);
      if (!valid) {
        return res.status(403).json({
          success: false,
          message: `The password you’ve entered is incorrect`,
        });
      }
      const payload = {
        userId: result[0].id,
        userName: result[0].userName,
        email: result[0].email,
      };

      const options = {
        expiresIn: "60m",
      };
      const token = await jwt.sign(payload, process.env.SECRET, options);
      return res.status(200).json({
        success: true,
        message: `Valid login credentials`,
        token: token,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    }
  });
};

module.exports = {
  login,
};
