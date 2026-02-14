const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

/* REGISTER */
app.post("/register", (req, res) => {
  const {
    role, name, email, phone, password, locality,
    patientContact, familyContact, medical,
    age, experience
  } = req.body;

  const userSql =
    "INSERT INTO users (name, email, phone, password, role) VALUES (?,?,?,?,?)";

  db.query(userSql, [name, email, phone, password, role], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("User already exists or error occurred");
    }

    const userId = result.insertId;

    if (role === "patient") {
      const pSql =
        "INSERT INTO patients (user_id, locality, patient_contact, family_contact, medical) VALUES (?,?,?,?,?)";
      db.query(pSql, [
        userId, locality, patientContact, familyContact, medical
      ]);
    }

    if (role === "caretaker") {
      const cSql =
        "INSERT INTO caretakers (user_id, age, experience, locality) VALUES (?,?,?,?)";
      db.query(cSql, [
        userId, age, experience, locality
      ]);
    }

    res.redirect("/login.html");
  });
});

/* LOGIN USING EMAIL + PASSWORD */
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE email=? AND password=?";

  db.query(sql, [email, password], (err, result) => {
    if (err) return res.send("Server error");

    if (result.length === 0) {
      return res.send("Invalid email or password");
    }

    if (result[0].role === "patient") {
      res.sendFile(path.join(__dirname, "public/patient.html"));
    } else {
      res.sendFile(path.join(__dirname, "public/caretaker.html"));
    }
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/login.html");
});
