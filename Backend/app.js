const express = require("express");
const cors = require("cors");
const connection = require("./Connection/connection"); // Import connection
const auth = require("./routes/auth");
const list = require("./routes/list");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connection();

app.get("/", (req, res) => {
  res.send("hello");
});

// APIs
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(1000, () => {
  console.log("Server Started on port 1000");
});
