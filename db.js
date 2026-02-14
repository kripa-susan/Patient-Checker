const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mathan5#",
  database: "patient_checker"
});

db.connect(err => {
  if (err) {
    console.log("Database error:", err);
  } else {
    console.log("MySQL connected");
  }
});

module.exports = db;
