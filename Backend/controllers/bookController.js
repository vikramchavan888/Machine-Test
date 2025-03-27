let books = [];
let currentId = 1;

// Fetch all books
exports.getBooks = (req, res) => {
  res.json(books);
};

// Add a new book
exports.addBook = (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author || !year) {
    return res
      .status(400)
      .json({ error: "Title, author, and year are required." });
  }

  const newBook = { id: currentId++, title, author, year };
  books.push(newBook);
  res.status(201).json(newBook);
};

// Update a book
exports.updateBook = (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return res.status(404).json({ error: "Book not found." });
  }

  if (title) book.title = title;
  if (author) book.author = author;
  if (year) book.year = year;

  res.json(book);
};

// Delete a book
exports.deleteBook = (req, res) => {
  const { id } = req.params;

  const bookIndex = books.findIndex((b) => b.id === parseInt(id));

  if (bookIndex === -1) {
    return res.status(404).json({ error: "Book not found." });
  }

  books.splice(bookIndex, 1);
  res.status(204).send();
};
