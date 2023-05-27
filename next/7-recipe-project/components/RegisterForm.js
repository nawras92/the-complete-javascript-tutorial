import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/dashboard.module.css';
import { authentication_page_email_label } from '../messages';
import { authentication_page_password_label } from '../messages';
import { authentication_page_username_label } from '../messages';
import { authentication_page_register_button } from '../messages';
import { validateRegisterForm } from '../utils/helpers';
import { sanitizeString } from '../utils/helpers';

export default function RegisterForm() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [registerData, setRegisterData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(false);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
    //Validation
    const { isValid, errors: myErrors } = validateRegisterForm({
      ...registerData,
      [name]: value,
    });
    if (isValid) {
      setValid(true);
      setErrors({
        ...errors,
        [name]: '',
      });
    } else {
      setValid(false);
      setErrors({
        ...errors,
        [name]: myErrors[name],
      });
    }
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Sanitize String
    const sanitizedData = {
      email: sanitizeString(registerData?.email),
      username: sanitizeString(registerData?.username),
      password: sanitizeString(registerData?.password),
    };
    // validate sanitized Data
    const { isValid, errors: myErrors } = validateRegisterForm(sanitizedData);
    if (isValid) {
      setValid(true);
    } else {
      setValid(false);
      setErrors(myErrors);
    }

    // Send Register  Request to backend
    if (isValid) {
      try {
        const registerResponse = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sanitizedData),
        });
        const dataReturned = await registerResponse.json();
        const { ok, message } = dataReturned;
        if (ok) {
          // redirect to dashboard
          setMessage(message);
          router.push('/login');
          window.location.reload();
        }
        if (!ok) {
          setMessage(message);

          throw new Error(message);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className={styles['form-wrapper']}>
      {message && <p className={styles['message']}>{message}</p>}
      <form className={styles['form']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="email">
            {authentication_page_email_label}
          </label>
          <input
            className={styles['input']}
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
          />
          {errors?.email && (
            <p className={styles['error-text']}>{errors.email}</p>
          )}
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="username">
            {authentication_page_username_label}
          </label>
          <input
            className={styles['input']}
            type="text"
            name="username"
            value={registerData.username}
            onChange={handleChange}
          />
          {errors?.username && (
            <p className={styles['error-text']}>{errors.username}</p>
          )}
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="password">
            {authentication_page_password_label}
          </label>
          <input
            className={styles['input']}
            type="password"
            name="password"
            value={registerData.password}
            onChange={handleChange}
          />
          {errors?.password && (
            <p className={styles['error-text']}>{errors.password}</p>
          )}
        </div>
        <div className={styles['form-group']}>
          <button
            disabled={!valid}
            className={`${styles['button']} ${styles['submit-button']}`}
          >
            {authentication_page_register_button}
          </button>
        </div>
      </form>
    </div>
  );
}
