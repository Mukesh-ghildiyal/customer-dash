import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  searchUsers,
  exportUsersToCSV
} from '../controllers/userController.js';
import { validateUser, handleValidationErrors } from '../middleware/validation.js';

const router = express.Router();

// GET /api/users - Get all users with pagination and search
router.get('/', getUsers);

// GET /api/users/search - Search users
router.get('/search', searchUsers);

// GET /api/users/export - Export users to CSV
router.get('/export', exportUsersToCSV);

// GET /api/users/:id - Get single user by ID
router.get('/:id', getUserById);

// POST /api/users - Create new user
router.post('/', validateUser, handleValidationErrors, createUser);

// PUT /api/users/:id - Update user
router.put('/:id', validateUser, handleValidationErrors, updateUser);

// DELETE /api/users/:id - Delete user
router.delete('/:id', deleteUser);

export default router;

