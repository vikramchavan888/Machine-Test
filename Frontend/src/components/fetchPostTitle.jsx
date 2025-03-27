import React, { useState } from "react";

function FetchPostByNumber() {
  const [postNumber, setPostNumber] = useState(""); // State for user input
  const [post, setPost] = useState(null); // State to store the fetched post
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Function to fetch post data
  const fetchPost = async () => {
    if (!postNumber) {
      setError("Please enter a valid post number.");
      return;
    }

    setLoading(true);
    setError(null);
    setPost(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postNumber}`
      );
      if (!response.ok) {
        throw new Error(`Post not found (Status: ${response.status})`);
      }
      const data = await response.json();
      setPost(data); // Update the post state with the fetched data
    } catch (err) {
      setError(err.message); // Handle errors
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Fetch Post by Number </h1>
      <input
        type="number"
        placeholder="Enter post number like 1 or 2 or 3 then click below button"
        value={postNumber}
        onChange={(e) => setPostNumber(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={fetchPost}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Fetch Post
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {post && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Post Details</h2>
          <p>
            <strong>ID:</strong> {post.id}
          </p>
          <p>
            <strong>Title:</strong> {post.title}
          </p>
        </div>
      )}
    </div>
  );
}

export default FetchPostByNumber;
