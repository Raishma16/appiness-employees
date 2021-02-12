const express = require("express");
const employees = require("./employees.json");

const app = express();

app.get("/api/employees", (req, res) => {
  res.send(employees);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
