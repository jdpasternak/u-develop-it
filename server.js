const express = require("express");
const { json } = require("express/lib/response");
const inputCheck = require("./utils/inputCheck");
const db = require("./db/connection");

const apiRoutes = require("./routes/apiRoutes");

// Middleware
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
