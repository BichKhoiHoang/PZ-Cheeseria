const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const path = require("path");
const dataRouter = require("./routes/data"); // Ensure you have your routes set up
const app = express();
const port = 5000;

const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");

var swaggerDocument = YAML.load("./swagger.yaml");
app.use("/", swaggerUI.serve);
app.get("/", swaggerUI.setup(swaggerDocument));

// MySQL connection
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "cheeses",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  app.locals.connection = connection;
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", dataRouter);

// Serve static files from the public/images directory
app.use("/images", express.static(path.join(__dirname, "public/images")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).json({ error: "Not Found" });
});

// Error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: err,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
