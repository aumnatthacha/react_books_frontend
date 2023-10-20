/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { booksData } from './booksData';
import './home.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();

  const handleEdit = (book) => {
    setSelectedBook(book);
  };

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className='row py-lg-5'>
      <h1 className='h1_books'>THE BOOKS</h1>
      <ul className="books-list row py-lg-5">
        {books.map((book) => (
          <li key={book.id} className="books-card">
            <div>
              <img src={book.imageURL} alt={book.title} />
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <div className="button-container">
                <Button variant="success" onClick={() => navigate('../update/' + book.id)}>
                  <i className="bi bi-arrow-repeat"></i> แก้ไข
                </Button>
                <Button variant="danger" onClick={() => handleDelete(book.id)}>
                  <i className="bi bi-trash"></i> ลบ
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
