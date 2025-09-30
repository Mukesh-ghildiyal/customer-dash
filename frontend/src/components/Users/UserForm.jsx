import React, { useEffect } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  Avatar,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userValidationSchema } from '../../utils/validation';
import { Person as PersonIcon } from '@mui/icons-material';

const UserForm = ({ initialData, onSubmit, loading, submitButtonText = 'Save User' }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userValidationSchema),
    defaultValues: initialData || {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      gender: '',
      status: '',
      profile: '',
      location: '',
    },
  });

  // ✅ Fix: re-sync form when initialData changes
  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const handleFormSubmit = (data) => {
    const formData = {
      ...data,
      profile:
        data.profile && typeof data.profile === 'object'
          ? `data:image/svg+xml;base64,${btoa(`
              <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" fill="#0000FF"/>
                <text x="75" y="80" font-family="Arial" font-size="24" fill="white" text-anchor="middle">
                  ${data.firstName.charAt(0)}${data.lastName.charAt(0)}
                </text>
              </svg>
            `)}`
          : data.profile ||
          `data:image/svg+xml;base64,${btoa(`
              <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" fill="#CCCCCC"/>
                <text x="75" y="80" font-family="Arial" font-size="16" fill="white" text-anchor="middle">
                  No Image
                </text>
              </svg>
            `)}`,
    };
    onSubmit(formData);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
        <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: 'primary.main' }}>
          <PersonIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Register Your Details
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={3}>
          {/* First Name */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="First name"
                  placeholder="Enter FirstName"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  disabled={loading}
                />
              )}
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Last Name"
                  placeholder="Enter LastName"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  disabled={loading}
                />
              )}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email address"
                  placeholder="Enter Email"
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  disabled={loading}
                />
              )}
            />
          </Grid>

          {/* Mobile */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="mobile"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Mobile"
                  placeholder="Enter Mobile"
                  error={!!errors.mobile}
                  helperText={errors.mobile?.message}
                  disabled={loading}
                />
              )}
            />
          </Grid>

          {/* Gender */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.gender}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                    Select Your Gender
                  </Typography>
                  <RadioGroup {...field} row sx={{ mt: 0 }}>
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  </RadioGroup>
                  {errors.gender && <FormHelperText>{errors.gender.message}</FormHelperText>}
                </FormControl>
              )}
            />
          </Grid>

          {/* Status */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.status}>
                  <InputLabel>Select Your Status</InputLabel>
                  <Select {...field} label="Select Your Status" disabled={loading}>
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="InActive">InActive</MenuItem>
                  </Select>
                  {errors.status && <FormHelperText>{errors.status.message}</FormHelperText>}
                </FormControl>
              )}
            />
          </Grid>

          {/* Profile */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="profile"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.profile}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                    Select Your Profile
                  </Typography>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        field.onChange(file);
                      } else {
                        field.onChange('');
                      }
                    }}
                    style={{
                      marginTop: 8,
                      padding: '8px',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      width: '100%',
                    }}
                  />
                  {errors.profile && <FormHelperText>{errors.profile.message}</FormHelperText>}
                </FormControl>
              )}
            />
          </Grid>

          {/* Location */}
          <Grid item xs={12} sm={6}>
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Enter Your Location"
                  placeholder="Enter Your Location"
                  error={!!errors.location}
                  helperText={errors.location?.message}
                  disabled={loading}
                />
              )}
            />
          </Grid>

          {/* Actions */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  minWidth: 200,
                  backgroundColor: '#8B4513',
                  '&:hover': {
                    backgroundColor: '#A0522D',
                  },
                }}
              >
                {loading ? 'Saving...' : submitButtonText}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default UserForm;
