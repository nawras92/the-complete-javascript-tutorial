import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/dashboard.module.css';

export default function RegisterForm() {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [registerData, setRegisterData] = useState({
    email: '',
    username: '',
    password: '',
  });

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send Register  Request to backend
    try {
      const registerResponse = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
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
  };
  return (
    <div className={styles['form-wrapper']}>
      <p className="message">{message}</p>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="email">
            Email
          </label>
          <input
            className={styles['input']}
            type="email"
            name="email"
            value={registerData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="username">
            Username
          </label>
          <input
            className={styles['input']}
            type="text"
            name="username"
            value={registerData.username}
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
            value={registerData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles['form-group']}>
          <button className={`${styles['button']} ${styles['submit-button']}`}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
