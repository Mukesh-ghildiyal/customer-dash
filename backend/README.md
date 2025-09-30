# User Dashboard Backend

A Node.js/Express backend API for user management with MongoDB integration.

## Features

- **CRUD Operations**: Complete user management with pagination
- **Search Functionality**: Advanced search across multiple fields
- **Data Export**: CSV export functionality
- **Validation**: Comprehensive input validation using express-validator
- **Error Handling**: Proper error handling and response formatting

## API Endpoints

### Users
- `GET /api/users` - Get all users with pagination and search
- `GET /api/users/:id` - Get single user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `GET /api/users/search` - Search users
- `GET /api/users/export` - Export users to CSV

### Health Check
- `GET /api/health` - Server health check

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Create .env file
PORT=5000
MONGODB_URI=mongodb://localhost:27017/user-dashboard
NODE_ENV=development
```

3. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

4. Seed the database with sample data:
```bash
npm run seed
```

5. Clear all data (optional):
```bash
npm run clear
```

## Database Schema

### User Model
```javascript
{
  firstName: String (required, max 50 chars)
  lastName: String (required, max 50 chars)
  email: String (required, unique, email format)
  phone: String (required, phone format)
  dateOfBirth: Date (required, age 18-100)
  address: {
    street: String (required, max 100 chars)
    city: String (required, max 50 chars)
    state: String (required, max 50 chars)
    zipCode: String (required, zip format)
    country: String (required, max 50 chars)
  }
  department: String (required, max 50 chars)
  position: String (required, max 50 chars)
  salary: Number (required, min 0)
  hireDate: Date (required)
  status: String (enum: active, inactive, terminated)
  createdAt: Date
  updatedAt: Date
}
```

## Query Parameters

### GET /api/users
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `search` - Search term
- `sortBy` - Sort field (default: createdAt)
- `sortOrder` - Sort order: asc/desc (default: desc)

### GET /api/users/search
- `q` - Search query (required)
- `limit` - Maximum results (default: 20)

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "errors": [ ... ]
}
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- express-validator
- csv-writer
- cors
- dotenv
