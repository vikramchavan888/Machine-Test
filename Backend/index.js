require("dotenv").config();
const express = require("express");
const cors = require("cors");

const bookRoutes = require("./routes/bookRoutes");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/books", bookRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
