import { email_field_required } from '../messages';
import { password_field_required } from '../messages';
import { username_field_required } from '../messages';
import { title_field_required } from '../messages';
import { description_field_required } from '../messages';
import { meal_field_required } from '../messages';
import { email_not_valid } from '../messages';
import { password_length } from '../messages';
import { username_length } from '../messages';
import { title_length } from '../messages';
import { description_length } from '../messages';

export function isLoggedIn() {
  // Check if window is defined
  // if(typeof window !== 'undefined'){
  //   // youre in browser
  // }
  const token = localStorage.getItem('LWNLoginToken');
  return !!token;
}

// Format Date
export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

// Sanitize Input
export function sanitizeString(input) {
  if (typeof input !== 'string') {
    return input;
  }

  const sanitizedInput = input.trim();
  return sanitizedInput;
}

// Validate register
export function validateRegisterForm(formData) {
  // form : {email: "email", username: "", password: ""}
  let errors = {};
  // Regex: email
  const emailRegex = /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Email is required
  if (!formData.email) {
    errors.email = email_field_required;
  }

  // password is required
  if (!formData.password) {
    errors.password = password_field_required;
  }

  // username is required
  if (!formData.username) {
    errors.username = username_field_required;
  }

  // Check for valid email
  if (!emailRegex.test(formData?.email)) {
    errors.email = email_not_valid;
  }
  //Password must be more than 8 chars
  if (formData.password.length < 8) {
    errors.password = password_length;
  }

  //Username must be more than 3 chars
  if (formData.username.length < 3) {
    errors.username = username_length;
  }

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors };
}

// Validate Login
export function validateLoginForm(formData) {
  // form : {identifier: "email", password: ""}
  let errors = {};
  // Regex: email
  const emailRegex = /^[a-zA-Z0-9-_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Email is required
  if (!formData.identifier) {
    errors.identifier = email_field_required;
  }

  // password is required
  if (!formData.password) {
    errors.password = password_field_required;
  }

  // Check for valid email
  if (!emailRegex.test(formData?.identifier)) {
    errors.identifier = email_not_valid;
  }
  //Password must be more than 8 chars
  if (formData.password.length < 8) {
    errors.password = password_length;
  }

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors };
}

// Validate Recipe Form
export function validateRecipeForm(formData) {
  // form : {title: "", description: "", meal: ""}
  let errors = {};

  // title is required
  if (!formData.title) {
    errors.title = title_field_required;
  }

  // description is required
  if (!formData.description) {
    errors.description = description_field_required;
  }
  // meal is required
  if (!formData.meal) {
    errors.meal = meal_field_required;
  }

  //Title must be  5 - 60 chars long
  if (formData.title.length < 5 || formData.title.length > 60) {
    errors.title = title_length;
  }

  //Description must be  10 - 160 chars long
  if (formData.description.length < 10 || formData.description.length > 160) {
    errors.description = description_length;
  }

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors };
}
