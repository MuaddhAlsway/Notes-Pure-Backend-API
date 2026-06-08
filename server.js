const express = require("express");
const app = express();
const notesRouter = require("./routes/notes.router");

const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/notes", notesRouter);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Notes API is running!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
