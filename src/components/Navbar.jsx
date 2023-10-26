/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const pages = ['Add', 'Login'];
const userRole = 'admin'; // แทนค่านี้ด้วยบทบาทของผู้ใช้จริง

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    if (isLoggedIn) {
      navigate('/login');
    }
  };

  const handleProfile = () => {
    if (isLoggedIn) {
      navigate('/profile');
    }
  };

  // สถานะสำหรับการค้นหา
  const [search, setSearch] = useState('');

  // ฟังก์ชันสำหรับการค้นหา
  const handleSearch = () => {
    console.log('Searching for:', search);
  };

  // ตรวจสอบว่าผู้ใช้เข้าสู่ระบบหรือไม่
  const isLoggedIn = userRole === 'admin';

  return (
    <AppBar position="static" sx={{ backgroundColor: 'DimGrey' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={userRole === 'admin' && page === 'Add' ? '/Add' : page === 'Login' ? '/Login' : '/'}
                sx={{ mx: 2, my: 2, color: 'white', display: 'block', backgroundColor: 'DimGrey' }}
              >
                {page}
              </Button>

            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              ml: 'auto',
              backgroundColor: 'LightGray',
              borderRadius: 2,
              padding: '2px 6px',
            }}
          >
            <SearchIcon sx={{ color: 'white' }} />
            <InputBase
              placeholder="Search..."
              sx={{
                ml: 1,
                flex: 1,
                p: 0.75,
                color: 'black',
                '&::placeholder': {
                  color: 'white',
                },
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn && (userRole === 'user' || userRole === 'admin') ? (
              <div>
                <Button onClick={handleProfile} component={Link} to="/Profile" sx={{ mx: 1, color: 'white' }}>
                  Profile
                </Button>
                <Button onClick={handleLogout} component={Link} to="/login" sx={{ mx: 1, color: 'white' }}>
                  Logout
                </Button>
              </div>
            ) : null}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
