import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const editBook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title: newTitle};
      }
      return book;
    });
    setBooks(updatedBooks);
  }

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
      <h1>My Reading List</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
