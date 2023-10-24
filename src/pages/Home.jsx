/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { booksData } from './booksData';
import { useNavigate } from 'react-router-dom';

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

  const groupSize = 5; // จำนวนรายการในแต่ละกลุ่ม

  const groupedBooks = books.reduce((result, item, index) => {
    const groupIndex = Math.floor(index / groupSize);
    if (!result[groupIndex]) {
      result[groupIndex] = [];
    }
    result[groupIndex].push(item);
    return result;
  }, []);

  const handleCancel = () => {
    navigate('/')
  };

  return (
    <div>
      {groupedBooks.map((group, groupIndex) => (
        <div
          key={groupIndex}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center', // จัดให้อยู่ตรงกลาง
            marginTop: '6rem', // ระยะห่างด้านบน
          }}
        >
          {group.map((book) => (
            <Card
              key={book.id}
              sx={{
                maxWidth: 167,
                width: '23%',
                marginBottom: '4rem', // ระยะห่างระหว่างรายการ
                marginLeft: '1.5rem', // ระยะห่างด้านซ้าย
                marginRight: '1.5rem', // ระยะห่างด้านขวา
                borderRadius: '1px',
              }}
              className="books-card"
            >
              <CardMedia
                component="img"
                style={{
                  maxWidth: '167px',
                  maxHeight: '250px',
                }}
                alt={book.name}
                image={book.imageURL}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {book.type}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => navigate('/update/' + book.id)}>
                  <i className="bi bi-arrow-repeat"></i> แก้ไข
                </Button>
                <Button onClick={() => handleDelete(book.id)}>
                  <i className="bi bi-trash"></i> ลบ
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;
