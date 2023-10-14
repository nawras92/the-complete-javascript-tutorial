'use client';

import { useState } from 'react';
import styles from '../styles/auth.module.css';
import messages from '../messages/auth';

export default function LoginForm() {
  const [message, setMessage] = useState('');

  const initialValues = {
    email: '',
    password: '',
  };

  const [formValues, setFormValues] = useState(initialValues);

  // Handle Change
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    // Login User
    const response = await fetch('/auth/login/api', {
      method: 'POST',
      body: JSON.stringify(formValues),
    });
    const result = await response.json();

    if (result?.ok) {
      setMessage(result?.message);
      window.location.href = '/';
    } else {
      setMessage(result?.message);
    }
  };
  return (
    <form className={styles['form']}>
      <h1>{messages['loginFormTitle']}</h1>
      {message && (
        <div className={styles['form-alert']}>
          <p>{message}</p>
        </div>
      )}
      <div className={styles['form-group']}>
        <label htmlFor="email">{messages.email}</label>
        <input
          value={formValues.email}
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="password">{messages.password}</label>
        <input
          value={formValues.password}
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
        />
      </div>
      <button onClick={handleSubmit} className={styles['submit-button']}>
        {messages['login']}
      </button>
    </form>
  );
}
