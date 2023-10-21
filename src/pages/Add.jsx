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

const defaultTheme = createTheme();

export default function Add() {
    const [newBook, setNewBook] = React.useState({
        name: '',
        type: '',
        imageURL: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook({
            ...newBook,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newBook);
        // Add code to save the new book data to the database or perform further actions
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
                            src={newBook.imageURL}
                            alt="รูปภาพ"
                            style={{ width: '235px', height: '375px' }}
                        />
                        <CardContent style={{ flex: 1 }}>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="ชื่อหนังสือ"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    value={newBook.name}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="type"
                                    label="ประเภท"
                                    type="text"
                                    autoComplete="type"
                                    value={newBook.type}
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
                                    value={newBook.imageURL}
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
                                </div>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
