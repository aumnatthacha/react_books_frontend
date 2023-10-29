/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { booksData } from '../booksData';
import { useNavigate } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Home = () => {
  const [books, setBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();
  const isAdmin = true; // Set this value as needed

  const handleEdit = (book) => {
    setSelectedBook(book);
  };

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const handleExpandClick = (book) => {
    book.expanded = !book.expanded;
    setBooks([...books]);
  };

  const groupSize = 4;

  const groupedBooks = books.reduce((result, item, index) => {
    const groupIndex = Math.floor(index / groupSize);
    if (!result[groupIndex]) {
      result[groupIndex] = [];
    }
    result[groupIndex].push(item);
    return result;
  }, []);

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      {groupedBooks.map((group, groupIndex) => (
        <div
          key={groupIndex}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',

          }}
        >

          {group.map((book) => (
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
              className="books-card"
            >


              <CardMedia
                component="img"
                style={{
                  maxWidth: '100%',
                  maxHeight: 250,
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
                {!isAdmin && (
                  <Button onClick={() => navigate('/update/' + book.id)}>
                    <i className="bi bi-arrow-repeat"></i> แก้ไข
                  </Button>
                )}
                {!isAdmin && (
                  <Button onClick={() => handleDelete(book.id)}>
                    <i className="bi bi-trash"></i> ลบ
                  </Button>
                )}

                <Button
                  onClick={() => handleExpandClick(book)}
                  aria-expanded={book.expanded}
                >
                  {book.expanded ? 'ยุบ' : 'แสดงรายละเอียด'}
                  <ExpandMoreIcon />
                </Button>
              </CardActions>

              <Collapse in={book.expanded}>
                <CardContent>
                  <Typography paragraph>ข้อมูลเพิ่มเติมเกี่ยวกับหนังสือ:</Typography>
                  <Typography>
                    ที่นี่คุณสามารถเพิ่มข้อมูลเพิ่มเติมเกี่ยวกับหนังสือของคุณ หากคุณมีข้อมูลเพิ่มเติมที่คุณต้องการแสดงให้ผู้ใช้เห็น.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Home;
