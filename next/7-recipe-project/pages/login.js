import LoginForm from '../components/LoginForm';
import styles from '../styles/dashboard.module.css';

export default function LoginPage() {
  return (
    <div className={styles['dashboard-container']}>
      <LoginForm />
    </div>
  );
}
