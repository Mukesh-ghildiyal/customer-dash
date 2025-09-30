import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      console.error('Unauthorized access');
    }
    return Promise.reject(error);
  }
);

export const userAPI = {
  // Get all users with pagination and search
  getUsers: (params = {}) => {
    return api.get('/users', { params });
  },

  // Get single user by ID
  getUserById: (id) => {
    return api.get(`/users/${id}`);
  },

  // Create new user
  createUser: (userData) => {
    return api.post('/users', userData);
  },

  // Update user
  updateUser: (id, userData) => {
    return api.put(`/users/${id}`, userData);
  },

  // Delete user
  deleteUser: (id) => {
    return api.delete(`/users/${id}`);
  },

  // Search users
  searchUsers: (query, limit = 20) => {
    return api.get('/users/search', { params: { q: query, limit } });
  },

  // Export users to CSV
  exportUsersToCSV: () => {
    return api.get('/users/export', { responseType: 'blob' });
  },
};

export default api;

