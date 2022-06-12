const jwt = require("jsonwebtoken");
const { con, connectDB } = require("../connection/connection");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // const token = req.headers.authorization;
    let decodeData = jwt.verify(token, process.env.JWT_SECRET);
    try {
      con.query(
        "select email_address, userId from user where userId=? and email_address=?",
        [decodeData.id.id, decodeData.id.email],
        async function (err, result) {
          if (err) {
            res.status(500).json({ Message: "User Authentication Failed" });
          }
          req.userData = await result[0];

          next();
        }
      );
    } catch (error) {
      res.status(402).json({ error: "User Authentication Failed" });
    }
    // next();
  } catch (error) {
    res.status(401).json({ error: "Authorization failed" });
  }
};

module.exports = { auth };
