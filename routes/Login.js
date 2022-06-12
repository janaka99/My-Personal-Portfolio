const router = require("express").Router();
const { con } = require("../connection/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
  res.status(100).json({ error: err.message, username: req.body.username });
  // try {
  //   con.query(
  //     "select password from user where name=?",
  //     req.body.username,
  //     async function (err, result) {
  //       if (err) {
  //         res
  //           .status(401)
  //           .json({ error: err.message, username: req.body.username });
  //       } else {
  //         const isPassword = await bcrypt.compare(
  //           req.body.password,
  //           result[0].password
  //         );
  //         if (isPassword) {
  //           con.query(
  //             "select userId , email_address from user where name=?",
  //             req.body.username,
  //             (err, result) => {
  //               if (err) {
  //                 res.status(106).json({ error: err.message });
  //               } else {
  //                 const token = createToken({
  //                   id: result[0].userId,
  //                   email: result[0].email_address,
  //                 });
  //                 const email = result[0].email_address;
  //                 console.log("Login Token,", token);
  //                 res.status(200).json({ result: email, token });
  //               }
  //             }
  //           );
  //         } else {
  //           console.log("Wrong password");
  //           res.status(341).json({ message: "Something Went wrong!!" });
  //         }
  //       }
  //     }
  //   );
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
});

router.post("/register-user", auth, async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(13);
    const password = await bcrypt.hash(req.body.password, salt);
    con.query(
      "Insert into user(name,password,role, email_address) values(?,?,?,?)",
      [req.body.username, password, "admin", req.body.email],
      (err, result) => {
        if (err) {
          res.status(200).json({ message: "User can not add" });
        } else {
          con.query(
            "select userId from user where email_address=?",
            req.body.email,
            (err, result) => {
              if (err) throw err;

              const token = createToken({
                id: result[0].userId,
                email: result[0].email_address,
              });
              const email = result[0].email_address;
              console.log(token);
              res.status(200).json({ result: email, token });
            }
          );
        }
      }
    );
  } catch (error) {
    res.status(400).json({ error: "Registration failed" });
  }
});

module.exports = router;
