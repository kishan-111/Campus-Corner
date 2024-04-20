import { useState } from "react";

const Notes = () => {
  // Sample list of notes (replace it with your actual data)
  const [notes, setNotes] = useState([
    { id: 1, course: "Mathematics", topic: "Algebra" },
    { id: 2, course: "Physics", topic: "Newtonian Mechanics" },
    { id: 3, course: "Chemistry", topic: "Chemical Reactions" },
    { id: 4, course: "Biology", topic: "Cell Biology" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notes Page</h1>
      <input
        type="text"
        placeholder="Search by course name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 px-4 py-2 rounded-md mb-4"
      />
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id} className="text-lg">
            <div className="font-bold">{note.course}</div>
            <div>{note.topic}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
