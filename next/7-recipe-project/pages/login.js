import LoginForm from '../components/LoginForm';
import styles from '../styles/dashboard.module.css';
import useUser from '../hooks/useUser';

export default function LoginPage() {
  const user = useUser();
  if (user) {
    return (
      <div>
        <p>You are logged In, go to the dashboard</p>
        <a href="/dashboard">Go To dashboard</a>
      </div>
    );
  }
  return (
    <div className={styles['dashboard-container']}>
      <LoginForm />
    </div>
  );
}
