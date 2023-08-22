import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [...books, {id: Math.round(Math.random() * 1000), title}]
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
