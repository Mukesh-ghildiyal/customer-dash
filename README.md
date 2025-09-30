# User Dashboard Application

A full-stack user management application built with React frontend and Node.js/Express backend with MongoDB database.

## 🚀 Features

### Backend Features
- ✅ **CRUD API** with pagination support
- ✅ **Search API** across multiple fields
- ✅ **Export to CSV** functionality
- ✅ **Input validation** with express-validator
- ✅ **Error handling** and proper HTTP status codes
- ✅ **MongoDB integration** with Mongoose

### Frontend Features
- ✅ **Responsive design** (Mobile/Desktop)
- ✅ **Field validation** with Yup schema
- ✅ **Multiple routing** (List, Add, Edit, View pages)
- ✅ **Component-based architecture**
- ✅ **Material-UI** for modern interface
- ✅ **Error handling** with notifications
- ✅ **Search and filtering** capabilities
- ✅ **Data export** functionality

## 📱 Screens

1. **Listing View Page** - Table screen with search, pagination, and actions
2. **Add/Edit Form Page** - Comprehensive form with validation
3. **View Details Page** - Detailed user information display

## 🛠️ Technology Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- express-validator
- csv-writer
- cors
- dotenv

### Frontend
- React 19
- React Router DOM
- Material-UI (MUI)
- React Hook Form
- Yup
- Axios
- React Toastify
- date-fns

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone <repository-url>
cd dashboard
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
echo "PORT=5000
MONGODB_URI=mongodb://localhost:27017/user-dashboard
NODE_ENV=development" > .env

# Start MongoDB (make sure MongoDB is running)
# Start the backend server
npm run dev

# Seed the database with sample data
npm run seed
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📁 Project Structure

```
dashboard/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Users
- `GET /api/users` - Get all users (with pagination)
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `GET /api/users/search` - Search users
- `GET /api/users/export` - Export to CSV

### Health Check
- `GET /api/health` - Server status

## 📊 Database Schema

### User Model
```javascript
{
  firstName: String (required)
  lastName: String (required)
  email: String (required, unique)
  mobile: String (required)
  gender: String (enum: Male, Female)
  status: String (enum: Active, InActive)
  profile: String (required)
  location: String (required)
  createdAt: Date
  updatedAt: Date
}
```

## 🎨 UI Features

- **Modern Design**: Material-UI components with custom theme
- **Responsive Layout**: Mobile-first approach
- **Interactive Tables**: Sortable columns, pagination, search
- **Form Validation**: Real-time validation with error messages
- **Loading States**: Spinners and skeleton loaders
- **Error Handling**: User-friendly error messages
- **Notifications**: Toast notifications for actions

## 🔍 Search & Filtering

- Search across name, email, department, and position
- Sort by any field (ascending/descending)
- Pagination with configurable page size
- Real-time search with debouncing

## 📤 Data Export

- Export all users to CSV format
- Includes all user fields
- Formatted for Excel compatibility
- Download with timestamp in filename

## 🛡️ Validation

### Backend Validation
- Server-side validation with express-validator
- Email format validation
- Phone number format validation
- Age range validation (18-100 years)
- Required field validation
- Data type validation

### Frontend Validation
- Client-side validation with Yup
- Real-time form validation
- Visual error indicators
- Custom validation messages

## 🚨 Error Handling

- Global error boundary for React components
- API error handling with user-friendly messages
- Form validation errors
- Network error handling
- 404 page handling

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Optimized for tablets (768px+)
- **Desktop**: Full-featured desktop experience (1024px+)
- **Touch-friendly**: Large touch targets on mobile
- **Collapsible navigation**: Mobile menu

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev  # Start with nodemon
npm start    # Production start
npm run seed # Seed database with sample data
npm run clear # Clear all data
```

### Frontend Development
```bash
cd frontend
npm run dev     # Development server
npm run build   # Production build
npm run preview # Preview build
```

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/user-dashboard
NODE_ENV=development
```

## 🧪 Testing

The application includes:
- Form validation testing
- API endpoint testing
- Error handling testing
- Responsive design testing

## 📦 Deployment

### Backend Deployment
1. Set production environment variables
2. Build and start the application
3. Ensure MongoDB is accessible
4. Configure reverse proxy (nginx)

### Frontend Deployment
1. Build the application: `npm run build`
2. Serve static files
3. Configure API endpoint URLs
4. Set up HTTPS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the README files in backend/ and frontend/ directories
- Review the API documentation
- Check the component documentation
- Open an issue for bugs or feature requests
