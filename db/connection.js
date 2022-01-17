const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "N0fish!!",
  database: "election",
});

module.exports = db;
