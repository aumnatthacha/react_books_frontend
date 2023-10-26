/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useRef, useState } from 'react'; // ลบ useEffect ออก
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"; // ลบ faInfoCircle ออก
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../../api/axios';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/Signup';

const defaultTheme = createTheme();

export default function UserRegistration() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if the input data is valid
    if (!USER_REGEX.test(user) || !PWD_REGEX.test(password) || password !== confirmPassword) {
      setError('Invalid Entry');
      return;
    }

    try {
      const response = await axios.post(REGISTER_URL, { user, password });
      console.log(response.data);
      // Clear the form
      setUser('');
      setPassword('');
      setConfirmPassword('');
      setError(''); // Clear any previous errors
    } catch (err) {
      if (!err.response) {
        setError('No Server Response');
      } else if (err.response.status === 409) {
        setError('Username Taken');
      } else {
        setError('Registration Failed');
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: 'black',
                color: 'white',
                '&:hover': {
                  bgcolor: 'white',
                  color: 'black',
                },
                '&:active': {
                  bgcolor: 'white',
                  color: 'black',
                },
              }}
            >
              Sign Up
            </Button>
            {error && (
              <Typography variant="body2" color="error" align="center">
                {error}
              </Typography>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/Login" variant="body2">
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
