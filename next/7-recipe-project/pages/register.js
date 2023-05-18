import RegisterForm from '../components/RegisterForm';
import styles from '../styles/dashboard.module.css';

export default function LoginPage() {
  return (
    <div className={styles['dashboard-container']}>
      <RegisterForm />
    </div>
  );
}
