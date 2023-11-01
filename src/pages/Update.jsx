/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const UPDATE_URL = '/books/{id}';

const defaultTheme = createTheme();
const updateBook = async (bookData) => {
  try {
    const response = await fetch(UPDATE_URL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });

    if (response.ok) {

      console.log('อัปเดตหนังสือสำเร็จ');
      navigate('/');
    } else {

      console.error('เกิดข้อผิดพลาดในการอัปเดตหนังสือ');
      setBook(originalBookData);
    }
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการเชื่อมต่อกับ API:', error);
  }
};


// export default function Update() {
//   const axiosPrivate = useAxiosPrivate();


//   const { id } = useParams();
//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await axiosPrivate(`/books/${id}`);
//         console.log(response.data)
//         if (response.status === 200) {

//           console.log(response.data)

//         } else {
//           console.error('เกิดข้อผิดพลาดในการดึงข้อมูลหนังสือ');
//         }
//       } catch (error) {
//         console.error('เกิดข้อผิดพลาดในการดึงข้อมูลหนังสือ:', error);
//       }
//     })();
//   }, []);

export default function Update() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = React.useState({
    id: id,
    author: '',
    ISBN: '',
    profileUrl: '',
    title: '',
    description: '',
    price: 0,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosPrivate(`/books/${id}`);
        if (response.status === 200) {
          const bookData = response.data;
          setBook({
            id: bookData.id,
            author: bookData.author,
            ISBN: bookData.ISBN,
            profileUrl: bookData.profileUrl,
            title: bookData.title,
            description: bookData.description,
            price: bookData.price,
          });
        } else {
          console.error('เกิดข้อผิดพลาดในการดึงข้อมูลหนังสือ');
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลหนังสือ:', error);
      }
    })();
  }, [id]);

  // const [book, setBook] = React.useState({
  //   id: id,
  //   author: '',
  //   ISBN: '',
  //   profileUrl: '',
  //   title: '',
  //   description: '',
  //   price: 0,
  // });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(book);

  };

  // const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/');
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Update Books
          </Typography>
          <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
            <img
              src={book.profileUrl}
              alt="รูปภาพ"
              style={{ width: '235px', height: '375px' }}
            />
            <CardContent style={{ flex: 1 }}>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="ชื่อหนังสือ"
                  name="title"
                  autoComplete="title"
                  autoFocus
                  value={book.title}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="author"
                  label="ผู้เขียน"
                  type="text"
                  autoComplete="author"
                  value={book.author}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="ISBN"
                  label="ISBN"
                  type="text"
                  autoComplete="ISBN"
                  value={book.ISBN}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="profileUrl"
                  label="URL รูปภาพ"
                  type="text"
                  autoComplete="profileUrl"
                  value={book.profileUrl}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="description"
                  label="รายละเอียด"
                  type="text"
                  autoComplete="description"
                  value={book.description}
                  onChange={handleInputChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="price"
                  label="ราคา"
                  type="number"
                  autoComplete="price"
                  value={book.price}
                  onChange={handleInputChange}
                />

                <div className="d-grid gap-2">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => updateBook({ ...book, id })}
                  >
                    อัปเดตหนังสือ
                  </Button>

                  <Button
                    type="button"
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 2 }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
