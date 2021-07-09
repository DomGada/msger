const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// parse application/json
app.use(bodyParser.json());
// Connecting to the Database
const db = require("./config/database");

// User routes
app.use("/users", require("./routes/users"));

// Chatlogs routes
app.use("/chatlogs", require("./routes/chatlogs"));

// Testing DB Connection
db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: " + err));

app.get("/api", (req, res) => {
  res.json({
    message: "Hello from server!",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
//5433 for postgres port