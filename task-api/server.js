const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const taskRoutes = require("./routes/taskRoutes");
app.use("/api", taskRoutes);

// MongoDB connection
mongoose.connect("mongodb+srv://kkaishwarya4_db_user:kuTRP7CrdFIcMN5s@cluster0.33gu65e.mongodb.net/taskdb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});