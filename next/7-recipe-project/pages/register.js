import RegisterForm from '../components/RegisterForm';
import Layout from '../components/Layout';
import styles from '../styles/dashboard.module.css';
import { register_page_title } from '../messages';

export default function LoginPage() {
  return (
    <Layout title={register_page_title}>
      <div className={styles['dashboard-container']}>
        <RegisterForm />
      </div>
    </Layout>
  );
}
