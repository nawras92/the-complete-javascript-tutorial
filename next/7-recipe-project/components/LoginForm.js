import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/dashboard.module.css';
import { authentication_page_email_label } from '../messages';
import { authentication_page_password_label } from '../messages';
import { authentication_page_login_button } from '../messages';
import { validateLoginForm } from '../utils/helpers';

export default function LoginForm() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(false);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    //Validation
    const { isValid, errors: myErrors } = validateLoginForm({
      ...loginData,
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
    // Send Login Request to backend
    if (valid) {
      try {
        const loginResponse = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });
        const dataReturned = await loginResponse.json();
        const { ok, message } = dataReturned;
        if (ok) {
          // redirect to dashboard
          setMessage(message);
          router.push('/dashboard');
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
          <label className={styles['label']} htmlFor="identifier">
            {authentication_page_email_label}
          </label>
          <input
            className={styles['input']}
            type="email"
            name="identifier"
            value={loginData.identifier}
            onChange={handleChange}
          />
          {errors?.identifier && (
            <p className={styles['error-text']}>{errors.identifier}</p>
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
            value={loginData.password}
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
            {authentication_page_login_button}
          </button>
        </div>
      </form>
    </div>
  );
}
