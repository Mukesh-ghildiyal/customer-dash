import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserDetails from '../components/Users/UserDetails';
import LoadingSpinner from '../components/Common/LoadingSpinner';
import { userAPI } from '../services/api';

const UserDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await userAPI.getUserById(id);
      
      if (response.data.success) {
        setUser(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      toast.error('Failed to fetch user details');
      navigate('/users');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    navigate(`/users/${user._id}/edit`);
  };

  const handleBack = () => {
    navigate('/users');
  };

  if (loading) {
    return <LoadingSpinner message="Loading user details..." />;
  }

  return (
    <UserDetails
      user={user}
      onEdit={handleEdit}
      onBack={handleBack}
    />
  );
};

export default UserDetailsPage;

