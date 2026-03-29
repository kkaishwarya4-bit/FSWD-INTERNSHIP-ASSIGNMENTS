const express = require("express");

const app = express();

// Route 1
app.get("/", (req, res) => {
    res.send("Welcome to Home Page 🏠");
});

// Route 2
app.get("/about", (req, res) => {
    res.send("This is About Page ℹ️");
});

// Route 3
app.get("/contact", (req, res) => {
    res.send("Contact us at: contact@example.com 📧");
});

// Route 4
app.get("/help", (req, res) => {
    res.send("This is Help Page ❓");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});