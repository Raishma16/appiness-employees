const express = require("express");
const bodyParser = require("body-parser");

const login = require("./login.json");
const employees = require("./employees.json");

const app = express();

app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const user = login.find((user) => user.username === req.body.username);
  if (user) {
    if (user.password === req.body.password) res.send({ user });
    else res.send({ error: "Password is incorrect!" });
  } else res.send({ error: "User not found!" });
});

app.get("/api/employees", (req, res) => {
  res.send(employees);
});

if (process.env.NODE_ENV === "production") {
  //To make Express serve production assets like main.css or main.js
  app.use(express.static("client/build"));

  //To make Express serve index.html file for react routes like /employees
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
