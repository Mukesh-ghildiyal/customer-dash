import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
} from '@mui/material';
import {
  People as PeopleIcon,
  Add as AddIcon,
  Search as SearchIcon,
  FileDownload as DownloadIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'View Users',
      description: 'Browse and manage all users in the system with advanced search and filtering capabilities.',
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      action: () => navigate('/users'),
      buttonText: 'View Users',
      color: 'primary',
    },
    {
      title: 'Add New User',
      description: 'Create new user profiles with comprehensive information and validation.',
      icon: <AddIcon sx={{ fontSize: 40 }} />,
      action: () => navigate('/users/add'),
      buttonText: 'Add User',
      color: 'success',
    },
    {
      title: 'Search Users',
      description: 'Quickly find users by name, email, department, or position.',
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      action: () => navigate('/users'),
      buttonText: 'Search Users',
      color: 'info',
    },
    {
      title: 'Export Data',
      description: 'Export user data to CSV format for external use and reporting.',
      icon: <DownloadIcon sx={{ fontSize: 40 }} />,
      action: () => navigate('/users'),
      buttonText: 'Export Data',
      color: 'warning',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        elevation={3}
        sx={{
          p: 6,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          mb: 4,
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          User Dashboard
        </Typography>
        <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
          Manage your users efficiently with our comprehensive user management system.
          Create, edit, search, and export user data with ease.
        </Typography>
      </Paper>

      {/* Features Grid */}
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              elevation={3}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                <Box
                  sx={{
                    color: `${feature.color}.main`,
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                <Button
                  variant="contained"
                  color={feature.color}
                  onClick={feature.action}
                  fullWidth
                  sx={{ mx: 2 }}
                >
                  {feature.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Quick Stats */}
      <Paper elevation={2} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Quick Access
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<PeopleIcon />}
              onClick={() => navigate('/users')}
              sx={{ py: 2 }}
            >
              All Users
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<AddIcon />}
              onClick={() => navigate('/users/add')}
              sx={{ py: 2 }}
            >
              Add User
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<SearchIcon />}
              onClick={() => navigate('/users')}
              sx={{ py: 2 }}
            >
              Search Users
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<DownloadIcon />}
              onClick={() => navigate('/users')}
              sx={{ py: 2 }}
            >
              Export Data
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default HomePage;

