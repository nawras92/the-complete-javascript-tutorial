import LoginForm from '../components/LoginForm';
import Layout from '../components/Layout';
import styles from '../styles/dashboard.module.css';
import useUser from '../hooks/useUser';
import { login_page_title } from '../messages';

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
    <Layout title={login_page_title}>
      <div className={styles['dashboard-container']}>
        <LoginForm />
      </div>
    </Layout>
  );
}
