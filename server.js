const express = require("express");
const mysql = require("mysql2");

// Middleware
const PORT = process.env.PORT || 3001;
const app = express();

// Database connection
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "N0fish!!",
    database: "election",
  },
  console.log("Connected to the election database.")
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
