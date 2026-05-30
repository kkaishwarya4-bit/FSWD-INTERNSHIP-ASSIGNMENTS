const express = require("express");
const app = express();

app.use(express.json());

const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");

// DEBUG CHECK
console.log("Books:", bookRoutes);
console.log("Authors:", authorRoutes);

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});