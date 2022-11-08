import React, { useState } from "react";
import Note from "./Note";

export default function Notes() {
  const [notes, setNotes] = useState([
    {
      id: "123",
      title: "Wykąpać psa",
      body: "Szampun dla psa",
    },
    {
      id: "235",
      title: "Zrobić zakupy w biedrze",
      body: "Maslo etc",
    },
  ]);

  return (
    <div className="p-5">
      <p className="text-center text-2xl font-bold">Notatki</p>
      {notes.map((note) => {
        return <Note id={note.id} title={note.title} body={note.body} />;
      })}
    </div>
  );
}
