import React, { useState } from "react";
import "./RemoveDuplicatesApp.css";

const RemoveDuplicatesApp = () => {
  const [inputArray, setInputArray] = useState("");
  const [outputArray, setOutputArray] = useState([]);
  const [error, setError] = useState("");

  const removeDuplicates = (arr) => {
    const uniqueArray = [];
    const seen = {};

    for (const item of arr) {
      if (!seen[item]) {
        uniqueArray.push(item);
        seen[item] = true;
      }
    }
    return uniqueArray;
  };

  const handleSubmit = () => {
    try {
      const parsedArray = JSON.parse(inputArray);

      if (!Array.isArray(parsedArray)) {
        setError("Please enter a valid JSON array.");
        setOutputArray([]);
        return;
      }

      setError("");
      const result = removeDuplicates(parsedArray);
      setOutputArray(result);
    } catch (e) {
      setError("Invalid input. Please enter a valid JSON array.");
      setOutputArray([]);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Remove Duplicates</h1>
        <textarea
          className="textarea"
          rows="3"
          placeholder="Enter a JSON array (e.g., [1, 2, 2, 3, 4, 4, 5])"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
        ></textarea>
        {error && <p className="error">{error}</p>}
        <button className="button" onClick={handleSubmit}>
          Remove Duplicates
        </button>
        {outputArray.length > 0 && (
          <div className="output">
            <h2 className="output-title">Output:</h2>
            <pre className="output-data">{JSON.stringify(outputArray)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveDuplicatesApp;
