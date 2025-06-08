import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  // Fetch notes from backend when component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  }, []);

  // Add a new note - POST request to backend
  function addNote(newNote) {
    axios
      .post("http://localhost:5000/api/notes", newNote)
      .then((response) => {
        // Add the saved note returned from backend to state
        setNotes((prevNotes) => [...prevNotes, response.data]);
      })
      .catch((error) => {
        console.error("Error adding note:", error);
      });
  }

  // Delete note - DELETE request to backend
  function deleteNote(id) {
    axios
      .delete(`http://localhost:5000/api/notes/${id}`)
      .then(() => {
        // Remove the note from state after successful deletion
        setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note._id}
          id={note._id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
