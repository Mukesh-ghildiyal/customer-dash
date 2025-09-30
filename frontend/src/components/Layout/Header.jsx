import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  People as PeopleIcon,
  Add as AddIcon,
  Home as HomeIcon,
} from '@mui/icons-material';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="static" elevation={2} sx={{ backgroundColor: '#424242' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            cursor: 'pointer',
            color: 'white',
          }}
          onClick={() => navigate('/')}
        >
          MERN stack developer practical task
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: isActive('/') ? 'rgba(255,255,255,0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Home
          </Button>

          <Button
            color="inherit"
            startIcon={<PeopleIcon />}
            onClick={() => navigate('/users')}
            sx={{
              backgroundColor: isActive('/users') ? 'rgba(255,255,255,0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Users
          </Button>

          <Button
            color="inherit"
            startIcon={<AddIcon />}
            onClick={() => navigate('/users/add')}
            sx={{
              backgroundColor: isActive('/users/add') ? 'rgba(255,255,255,0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Add User
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
