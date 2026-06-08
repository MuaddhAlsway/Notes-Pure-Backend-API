const express = require("express");
const router = express.Router();
const notes = require("../data/notes");

// GET all notes
router.get("/", (req, res) => {
  res.json(notes);
});

// GET a single note by id
router.get("/:id", (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: "Note not found" });
  res.json(note);
});

// POST create a new note
router.post("/", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }
  const newNote = {
    id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
    title,
    content,
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// PUT update a note by id
router.put("/:id", (req, res) => {
  const note = notes.find((n) => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: "Note not found" });

  const { title, content } = req.body;
  if (title) note.title = title;
  if (content) note.content = content;

  res.json(note);
});

// DELETE a note by id
router.delete("/:id", (req, res) => {
  const index = notes.findIndex((n) => n.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Note not found" });

  const deleted = notes.splice(index, 1);
  res.json({ message: "Note deleted", note: deleted[0] });
});

module.exports = router;
