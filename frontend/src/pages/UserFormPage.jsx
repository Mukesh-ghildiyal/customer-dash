import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserForm from '../components/Users/UserForm';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import { userAPI } from '../services/api';

const UserFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState(null);
  const [fetching, setFetching] = useState(isEdit);

  useEffect(() => {
    if (isEdit) {
      fetchUser();
    }
  }, [id, isEdit]);

  const fetchUser = async () => {
    try {
      setFetching(true);
      const response = await userAPI.getUserById(id);

      if (response.data.success) {
        const user = response.data.data;
        // Set initial data for the form
        setInitialData({
          ...user,
        });
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      toast.error('Failed to fetch user details');
      navigate('/users');
    } finally {
      setFetching(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      if (isEdit) {
        await userAPI.updateUser(id, formData);
        toast.success('User updated successfully');
      } else {
        await userAPI.createUser(formData);
        toast.success('User created successfully');
      }

      // Navigate to users list after successful submission
      navigate('/users', {
        state: {
          refreshList: true,
          goToFirstPage: !isEdit,
        },
      });
    } catch (error) {
      console.error('Error saving user:', error);

      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.response?.data?.errors) {
        // Handle validation errors
        const errors = error.response.data.errors;
        errors.forEach((err) => {
          toast.error(err.msg || err.message);
        });
      } else {
        toast.error(isEdit ? 'Failed to update user' : 'Failed to create user');
      }
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <LoadingSpinner message="Loading user details..." />;
  }

  return (
    <UserForm
      initialData={initialData}
      onSubmit={handleSubmit}
      loading={loading}
      submitButtonText={isEdit ? 'Update User' : 'Create User'}
    />
  );
};

export default UserFormPage;
