import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URI);

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model("Note", noteSchema);

// GET all notes
app.get("/api/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// POST new note
app.post("/api/notes", async (req, res) => {
  const newNote = new Note(req.body);
  const savedNote = await newNote.save();
  res.json(savedNote);
});

// DELETE note by ID
app.delete("/api/notes/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log("Server running on port 5000");
});
