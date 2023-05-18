import { useState } from 'react';
import { loginUser } from '../api/recipe';
import { useRouter } from 'next/router';
import styles from '../styles/dashboard.module.css';

export default function LoginForm() {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
  });

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send Login Request to backend
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
        router.push('/dashboard');
        window.location.reload();
      }
      if (!ok) {
        console.log(message);

        throw new Error(message);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles['form-wrapper']}>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="identifier">
            Email
          </label>
          <input
            className={styles['input']}
            type="email"
            name="identifier"
            value={loginData.identifier}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="password">
            Password
          </label>
          <input
            className={styles['input']}
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-group']}>
          <button className={`${styles['button']} ${styles['submit-button']}`}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
