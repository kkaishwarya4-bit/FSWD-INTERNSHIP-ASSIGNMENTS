const express = require("express");
const router = express.Router();

// Sample data
let books = [
  { id: 1, title: "Atomic Habits" },
  { id: 2, title: "Rich Dad Poor Dad" }
];

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// POST add book
router.post("/", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title
  };
  books.push(newBook);
  res.json(newBook);
});

// PUT update book
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) return res.send("Book not found");

  book.title = req.body.title;
  res.json(book);
});

// DELETE book
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.send("Book deleted");
});

module.exports = router;