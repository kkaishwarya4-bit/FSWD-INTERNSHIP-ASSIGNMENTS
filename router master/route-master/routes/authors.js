const express = require("express");
const router = express.Router();

let authors = [
  { id: 1, name: "James Clear" },
  { id: 2, name: "Robert Kiyosaki" }
];

// GET
router.get("/", (req, res) => {
  res.json(authors);
});

// POST
router.post("/", (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    name: req.body.name
  };
  authors.push(newAuthor);
  res.json(newAuthor);
});

// PUT
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const author = authors.find(a => a.id === id);

  if (!author) return res.send("Author not found");

  author.name = req.body.name;
  res.json(author);
});

// DELETE
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  authors = authors.filter(a => a.id !== id);
  res.send("Author deleted");
});

module.exports = router;