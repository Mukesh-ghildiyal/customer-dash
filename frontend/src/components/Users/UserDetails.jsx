import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Chip,
  Divider,
  Card,
  CardContent,
  Avatar,
  Button,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Work as WorkIcon,
  AttachMoney as MoneyIcon,
  CalendarToday as CalendarIcon,
  Edit as EditIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { formatDate, formatPhoneNumber } from '../../utils/validation';

const UserDetails = ({ user, onEdit, onBack }) => {
  if (!user) {
    return (
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          User not found
        </Typography>
      </Paper>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'error';
      case 'InActive':
        return 'warning';
      default:
        return 'default';
    }
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={onBack}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
        <Typography variant="h4" fontWeight="bold">
          User Details
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Profile Card */}
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  fontSize: '2.5rem',
                  mx: 'auto',
                  mb: 2,
                  bgcolor: 'primary.main',
                }}
              >
                {getInitials(user.firstName, user.lastName)}
              </Avatar>
              
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {user.firstName} {user.lastName}
              </Typography>
              
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {user.gender}
              </Typography>
              
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {user.location}
              </Typography>
              
              <Chip
                label={user.status}
                color={getStatusColor(user.status)}
                sx={{ mt: 2 }}
              />
              
              <Box sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={() => onEdit(user)}
                  fullWidth
                >
                  Edit User
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Details */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {/* Personal Information */}
            <Grid item xs={12}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon />
                  Personal Information
                </Typography>
                <Divider sx={{ mb: 2 }} />
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <EmailIcon color="action" />
                      <Typography variant="body2" color="text.secondary">
                        Email:
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight="medium">
                      {user.email}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <PhoneIcon color="action" />
                      <Typography variant="body2" color="text.secondary">
                        Mobile:
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight="medium">
                      {formatPhoneNumber(user.mobile)}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <LocationIcon color="action" />
                      <Typography variant="body2" color="text.secondary">
                        Location:
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight="medium">
                      {user.location}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Additional Information */}
            <Grid item xs={12}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon />
                  Additional Information
                </Typography>
                <Divider sx={{ mb: 2 }} />
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <PersonIcon color="action" />
                      <Typography variant="body2" color="text.secondary">
                        Gender:
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight="medium">
                      {user.gender}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <LocationIcon color="action" />
                      <Typography variant="body2" color="text.secondary">
                        Location:
                      </Typography>
                    </Box>
                    <Typography variant="body1" fontWeight="medium">
                      {user.location}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Profile Information */}
            <Grid item xs={12}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PersonIcon />
                  Profile Information
                </Typography>
                <Divider sx={{ mb: 2 }} />
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <PersonIcon color="action" />
                      <Typography variant="body2" color="text.secondary">
                        Profile Image:
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <img 
                        src={user.profile} 
                        alt="Profile" 
                        style={{ 
                          width: 60, 
                          height: 60, 
                          borderRadius: '50%',
                          objectFit: 'cover'
                        }} 
                      />
                      <Typography variant="body2" color="text.secondary">
                        Profile picture
                      </Typography>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <LocationIcon color="action" />
                      <Typography variant="body2" color="text.secondary">
                        Status:
                      </Typography>
                    </Box>
                    <Chip
                      label={user.status}
                      color={getStatusColor(user.status)}
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* System Information */}
            <Grid item xs={12}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom color="primary">
                  System Information
                </Typography>
                <Divider sx={{ mb: 2 }} />
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      User ID:
                    </Typography>
                    <Typography variant="body1" fontWeight="medium" sx={{ fontFamily: 'monospace' }}>
                      {user._id}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      Created:
                    </Typography>
                    <Typography variant="body1" fontWeight="medium">
                      {formatDate(user.createdAt)}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      Last Updated:
                    </Typography>
                    <Typography variant="body1" fontWeight="medium">
                      {formatDate(user.updatedAt)}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserDetails;
