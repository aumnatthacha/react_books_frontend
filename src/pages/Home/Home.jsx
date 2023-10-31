/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const Home = () => {
  const [books, setBooks] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [originalBooks, setOriginalBooks] = useState([]);
  const isAdmin = true;

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosPrivate.get('/books');
        if (response.status === 200) {
          setBooks(response.data);
          setOriginalBooks(response.data); // Store the original data
        } else {
          console.error('เกิดข้อผิดพลาดในการดึงข้อมูลหนังสือ');
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลหนังสือ:', error);
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosPrivate.delete(`/books/${id}`);
      const updatedBooks = books.filter((book) => book.id !== id);
      setBooks(updatedBooks);
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการลบหนังสือ:', error);
    }
  };

  const handleExpandClick = (book) => {
    book.expanded = !book.expanded;
    setBooks([...books]);
  };

  const handleEdit = (id) => {
    const originalBook = originalBooks.find((book) => book.id === id);
    if (originalBook) {
      navigate(`/update/${id}`, { state: { originalBook } });
    } else {
      console.error('ไม่พบข้อมูลหนังสือที่ต้องการแก้ไข');
    }
  };

  return (
    <div>
      {books.map((book) => (
        <Card
          key={book.id}
          sx={{
            maxWidth: 250,
            width: '30%',
            marginTop: '8rem',
            borderRadius: '8px',
            marginLeft: '1rem',
            marginRight: '1rem',
          }}
        >
          <CardMedia component="img" alt={book.title} image={book.profileUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ISBN: {book.ISBN}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author: {book.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description: {book.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${book.price}
            </Typography>
          </CardContent>
          <CardActions>
            {isAdmin && (
              <Button
                onClick={() => handleEdit(book.id)}
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
            )}
            {isAdmin && (
              <Button
                onClick={() => handleDelete(book.id)}
                variant="contained"
                color="secondary"
              >
                Delete
              </Button>
            )}
            <Button
              onClick={() => handleExpandClick(book)}
              aria-expanded={book.expanded}
            >
              {book.expanded ? 'Collapse Details' : 'Expand Details'}
              <ExpandMoreIcon />
            </Button>
          </CardActions>
          <Collapse in={book.expanded}>
            <CardContent>
              <Typography paragraph>Additional book details:</Typography>
              <Typography>
                Description: {book.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
};

export default Home;





// console.log(auth);
// console.log(res.data);