const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { auth } = require("../middleware/auth");
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

// useEffect(()=>{
//   if(token){
//     const decodedToken = decode(token)
//     if(decodedToken.exp * 1000 < Date().getItem())
//   }
// },[])

router.get("/", auth, (req, res) => {
  try {
    res.status(200).json(req.userEmail);
    // res.status(200).json({ msg: "hellowrodl" });
  } catch (err) {
    res.status(400).json({ error: "Something goes wrong" });
  }
});

router.post("/login-call", async (req, res) => {
  try {
    const { username, password } = await req.body;
    User.findOne({ username: username }).exec(async function (err, user) {
      if (err) {
        res.status(200).json({ error: "Username or password Incorrect" });
      } else if (user) {
        const isPassword = await bcrypt.compare(password, user.password);
        if (isPassword) {
          const token = await createToken({
            id: user._id,
            email: user.email,
          });

          res.status(200).json({ result: user.email, token });
        } else {
          res.status(200).json({ error: "Username or password Incorrect" });
        }
      } else {
        res.status(200).json({ error: "Username or password Incorrect" });
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/register-user", auth, async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(13);
    const password = await bcrypt.hash(req.body.password, salt);
    const { username, email } = await req.body;
    const user = new User({ username, password, email, role: "admin" });
    await user.save();
    console.log("USer addedd");
    res.status(200).json({ message: "Inserted Successfull" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Registration failed" });
  }
});

module.exports = router;
