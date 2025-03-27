# Book Manager Application

This repository contains both the backend and frontend of a simple Book Manager application. The backend is built with Node.js and Express.js, while the frontend is created using React.js.

---
## Frontend

### Description
The frontend provides a simple interface to interact with the backend API. Users can view the list of books, delete books, and see updates in real time.

### Technologies
- React.js
- Axios (for API requests)
## Backend

### Description
The backend provides a RESTful API for managing books. It supports CRUD operations to add, fetch, update, and delete books. The API uses an in-memory data structure to store books.

### Technologies
- Node.js
- Express.js
- CORS (Cross-Origin Resource Sharing)

### Endpoints

#### Base URL
`http://localhost:3000`

#### 1. Fetch All Books
**GET** `/books`
- Returns a list of all books.

#### 2. Add a New Book
**POST** `/books`
- Request Body:
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "year": 2023
  }
  ```
- Response:
  ```json
  {
    "id": 1,
    "title": "Book Title",
    "author": "Author Name",
    "year": 2023
  }
  ```

#### 3. Update a Book
**PUT** `/books/:id`
- Request Body:
  ```json
  {
    "title": "Updated Title",
    "author": "Updated Author",
    "year": 2024
  }
  ```
- Response:
  ```json
  {
    "id": 1,
    "title": "Updated Title",
    "author": "Updated Author",
    "year": 2024
  }
  ```

#### 4. Delete a Book
**DELETE** `/books/:id`
- Response: `204 No Content`



---


### Features
- Fetch and display all books.
- Delete a book using the delete button.
- Hooks: `useState` and `useEffect`.

### Installation and tart the frontend
1. Navigate to the `book-manager` directory.
2. Install dependencies:
   ```bash
   npm install
   npm run dev
   ```
### Installation and tart the backend
1. Navigate to the `rest-api-books` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. The server will run at `http://localhost:3000`.



### Usage
1. Ensure the backend server is running.
2. Open the frontend application in a browser.
3. Interact with the app to view and delete books.

---

## Notes
- The backend uses in-memory storage, so all data will be lost when the server is restarted.
- To test the API, use tools like Postman or curl.

---
