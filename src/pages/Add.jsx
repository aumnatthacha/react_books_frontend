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
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const defaultTheme = createTheme();
// const ADD_URL = '/books';


export default function Add() {
    const navigate = useNavigate()
    const [book, setBook] = useState({
        name: '',
        description: '',
        img: '',
        author: '',
        price: '',
        ISBN: '',

    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBook({
            ...book,
            [name]: value,
        });
    };

    const handleAddBook = () => {
        const ADD_URL = '/books';
        const newBookData = {
            name: book.name,
            description: book.description,
            img: book.img,
            author: book.author,
            price: book.price,
            ISBN: book.ISBN,
        };

        fetch(ADD_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBookData),
        })
            .then((response) => {
                if (response.ok) {
                    alert('เพิ่มหนังสือสำเร็จ');
                } else {
                    console.error('เกิดข้อผิดพลาดในการเพิ่มหนังสือ');
                }
            })
            .catch((error) => {
                console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
            });
    };


    const handleCancel = () => {
        navigate('/')
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
                        Add New Book
                    </Typography>
                    <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
                        <img
                            src={book.imageURL}
                            alt="รูปภาพ"
                            style={{ width: '235px', height: '375px' }}
                        />
                        <CardContent style={{ flex: 1 }}>
                            <Box component="form" onSubmit={handleAddBook} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="author"
                                    label="ผู้แต่ง"
                                    name="author"
                                    autoComplete="author"
                                    autoFocus
                                    value={book.author}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="ISBN"
                                    label="รหัสหนังสือ"
                                    name="ISBN"
                                    autoComplete="ISBN"
                                    autoFocus
                                    value={book.ISBN}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="ชื่อหนังสือ"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    value={book.title}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="description"
                                    label="ประเภท"
                                    type="description"
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
                                    type="price"
                                    autoComplete="price"
                                    value={book.price}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="img"
                                    label="URL รูปภาพ"
                                    type="text"
                                    autoComplete="img"
                                    value={book.imageURL}
                                    onChange={handleInputChange}
                                />

                                <div className="d-grid gap-2">
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        เพิ่มหนังสือ
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
