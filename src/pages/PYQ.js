import { useState } from "react";

const PYQ = () => {
  // Sample list of PYQs (replace it with your actual data)
  const [pyqs, setPYQs] = useState([
    { id: 1, course: "Mathematics", year: "2020" },
    { id: 2, course: "Physics", year: "2019" },
    { id: 3, course: "Chemistry", year: "2021" },
    { id: 4, course: "Biology", year: "2018" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPYQs = pyqs.filter((pyq) =>
    pyq.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">PYQ Page</h1>
      <input
        type="text"
        placeholder="Search by course name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 px-4 py-2 rounded-md mb-4"
      />
      <ul>
        {filteredPYQs.map((pyq) => (
          <li key={pyq.id} className="text-lg">
            <div className="font-bold">{pyq.course}</div>
            <div>{pyq.year}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PYQ;
