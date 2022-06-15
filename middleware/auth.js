const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // const token = req.headers.authorization;
    let decodeData = jwt.verify(token, process.env.JWT_SECRET);
    try {
      User.findOne({ _id: decodeData.id.id }, async function (err, user) {
        if (err) {
          res.status(200).json({ error: "Session over log In " });
        } else if (user) {
          req.userData = user.email;
          next();
        } else {
          res.status(200).json({ error: "Session over log In " });
        }
      });
    } catch (error) {
      res.status(402).json({ error: "User Authentication Failed" });
    }
    // next();
  } catch (error) {
    res.status(401).json({ error: "Authorization failed" });
  }
};

module.exports = { auth };
