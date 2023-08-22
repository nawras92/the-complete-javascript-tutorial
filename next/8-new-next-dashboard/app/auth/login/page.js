import styles from '../../styles/auth.module.css';
import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    <div className={styles['container']}>
      <div className={styles['container-inner']}>
        <LoginForm />
      </div>
    </div>
  );
}
