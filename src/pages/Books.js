import { useState } from "react";

const Books = () => {
  // Sample list of books (replace it with your actual data)
  const [books, setBooks] = useState([
    { id: 1, title: "Book 1" },
    { id: 2, title: "Book 2" },
    { id: 3, title: "Book 3" },
    { id: 4, title: "Book 4" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Books Page</h1>
      <input
        type="text"
        placeholder="Search books"
        value={searchTerm}
        onChange={handleSearchChange}
        className="border border-gray-300 px-12 py-2 rounded-md mb-4"
      />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id} className="text-lg">
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
