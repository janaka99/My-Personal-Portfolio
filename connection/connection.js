const mysql = require("mysql");

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   port: "3308",
//   password: "password",
//   database: "liveportfolio",
// });

const con = mysql.createConnection({
  host: process.env.SQLDATABASE_HOST,
  user: process.env.SQLDATABASE_USER,
  password: process.env.SQLDATABASE_PASSWORD,
  database: process.env.SQLDATABASE_HOST,
});

module.exports = {
  con,
};
