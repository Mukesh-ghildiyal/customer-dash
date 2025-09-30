# User Dashboard Frontend

A React-based frontend application for user management with Material-UI components.

## Features

- **Responsive Design**: Mobile and desktop optimized
- **User Management**: Complete CRUD operations
- **Advanced Search**: Real-time search with filtering
- **Data Export**: CSV export functionality
- **Form Validation**: Comprehensive client-side validation
- **Error Handling**: User-friendly error messages and notifications
- **Modern UI**: Material-UI components with custom theme

## Pages

1. **Home Page** (`/`) - Dashboard overview with quick access
2. **User List** (`/users`) - Table view with search, pagination, and actions
3. **Add User** (`/users/add`) - Form to create new users
4. **Edit User** (`/users/:id/edit`) - Form to edit existing users
5. **User Details** (`/users/:id`) - Detailed user information view

## Components

### Layout Components
- `Header` - Navigation header with menu items
- `Layout` - Main layout wrapper with header and content

### Common Components
- `LoadingSpinner` - Loading indicator
- `ErrorBoundary` - Error boundary for error handling

### User Components
- `UserTable` - Data table with actions menu
- `UserForm` - Form for adding/editing users
- `UserDetails` - Detailed user information display

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Technologies Used

- React 19
- React Router DOM
- Material-UI (MUI)
- React Hook Form
- Yup (validation)
- Axios (HTTP client)
- React Toastify (notifications)
- date-fns (date utilities)

## Form Validation

The application uses Yup schema validation with the following rules:

- **Personal Information**: Required fields with length limits
- **Email**: Valid email format
- **Phone**: Valid phone number format
- **Date of Birth**: Age between 18-100 years
- **Address**: All address fields required
- **Employment**: Department, position, salary, and hire date required
- **Salary**: Numeric value, minimum 0

## Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Breakpoints at 600px, 768px, 960px, 1280px
- Collapsible navigation on mobile
- Optimized table layout for small screens
- Touch-friendly interface elements

## State Management

- Local component state with React hooks
- Form state managed by React Hook Form
- API calls handled with Axios
- Error and loading states properly managed

## Styling

- Material-UI theme with custom colors
- Consistent spacing and typography
- Custom CSS for animations and utilities
- Responsive grid system
- Dark/light theme support (Material-UI default)

## API Integration

The frontend communicates with the backend API through:
- Centralized API service (`services/api.js`)
- Axios interceptors for request/response handling
- Error handling with user-friendly messages
- Loading states for better UX

## File Structure

```
src/
├── components/
│   ├── Common/
│   ├── Layout/
│   └── Users/
├── pages/
├── services/
├── utils/
├── App.jsx
└── main.jsx
```

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- ESLint configuration for code quality
- Consistent file naming conventions
- Component-based architecture
- Proper error boundaries
- TypeScript-ready structure