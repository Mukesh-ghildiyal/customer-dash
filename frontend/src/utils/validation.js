import * as yup from 'yup';

export const userValidationSchema = yup.object({
  firstName: yup
    .string()
    .required('First name is required')
    .max(50, 'First name cannot exceed 50 characters')
    .trim(),
  
  lastName: yup
    .string()
    .required('Last name is required')
    .max(50, 'Last name cannot exceed 50 characters')
    .trim(),
  
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required')
    .lowercase()
    .trim(),
  
  mobile: yup
    .string()
    .required('Mobile number is required')
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid mobile number')
    .trim(),
  
  gender: yup
    .string()
    .required('Gender is required')
    .oneOf(['Male', 'Female'], 'Please select a valid gender'),
  
  status: yup
    .string()
    .required('Status is required')
    .oneOf(['Active', 'InActive'], 'Please select a valid status'),
  
  profile: yup
    .mixed()
    .optional(),
  
  location: yup
    .string()
    .required('Location is required')
    .max(100, 'Location cannot exceed 100 characters')
    .trim(),
});

export const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toISOString().split('T')[0];
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};
