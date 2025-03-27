import React, { useState, useEffect } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]); // State to store books
  const [error, setError] = useState(""); // State to store error messages

  // Fetch books from the backend API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://machine-test-psi.vercel.app/books"
        ); // API call
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data); // Set the fetched books to state
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBooks();
  }, []);

  // Delete a book
  const deleteBook = async (id) => {
    try {
      const response = await fetch(
        `https://machine-test-psi.vercel.app/books/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete the book");
      }
      setBooks(books.filter((book) => book.id !== id)); // Update state
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Book Manager</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {books.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {books.map((book) => (
            <li
              key={book.id}
              style={{
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                <strong>{book.title}</strong> by {book.author} ({book.year})
              </span>
              <button
                onClick={() => deleteBook(book.id)}
                style={{
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "#ff4d4f",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available. Please add some via Postman.</p>
      )}
    </div>
  );
};

export default BookList;
