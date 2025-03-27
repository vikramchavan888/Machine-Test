import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import RemoveDuplicatesApp from "./components/RemoveDuplicatesApp";
import FetchPostTitle from "./components/fetchPostTitle";

function App() {
  return (
    <Router>
      <div>
        <header style={headerStyle}>
          <h1 style={headingStyle}>Machine Test</h1>
        </header>
        <nav style={navStyle}>
          <Link to="/remove-duplicates" style={linkStyle}>
            <button style={buttonStyle}>Task 1 ► Remove Duplicates </button>
          </Link>
          <Link to="/book-list" style={linkStyle}>
            <button style={buttonStyle}>Task 2 + 4 ► Book List </button>
          </Link>
          <Link to="/fetch-post-title" style={linkStyle}>
            <button style={buttonStyle}>Task 3 ► Fetch Post Title</button>
          </Link>
        </nav>

        <div style={contentStyle}>
          <Routes>
            <Route
              path="/remove-duplicates"
              element={<RemoveDuplicatesApp />}
            />
            <Route path="/book-list" element={<BookList />} />
            <Route path="/fetch-post-title" element={<FetchPostTitle />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Styles
const headerStyle = {
  textAlign: "center",
  padding: "20px 0",
  backgroundColor: "#f8f9fa",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  margin: 0,
  fontSize: "32px",
  fontWeight: "bold",
  color: "#333",
};
const navStyle = {
  position: "sticky",
  top: 0,
  backgroundColor: "#f8f9fa",
  padding: "10px 20px",
  display: "flex",
  gap: "10px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  zIndex: 1000,
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const linkStyle = {
  textDecoration: "none",
};

const contentStyle = {
  padding: "20px",
};

export default App;
