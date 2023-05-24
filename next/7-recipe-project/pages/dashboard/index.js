import styles from '../../styles/dashboard.module.css';
import useUser from '../../hooks/useUser';
import Layout from '../../components/Layout';
import { dashboard_page_title } from '../../messages';
import { dashboard_page_welcome_message } from '../../messages';
import { nav_link_add_recipe } from '../../messages';
import { nav_link_my_recipes } from '../../messages';
import { nav_link_all_recipes } from '../../messages';

export default function DashboardPage() {
  useUser({ redirectTo: true });
  return (
    <Layout title={dashboard_page_title}>
      <div className={styles['dashboard-container']}>
        <div className={styles['dashboard']}>
          <h1 className={styles['dashboard-welcome']}>
            {dashboard_page_welcome_message}
          </h1>
          <div className={styles['button-group']}>
            <a
              href="/dashboard/recipes"
              className={`${styles['button']} ${styles['button-warning']}`}
            >
              {nav_link_my_recipes}
            </a>
            <a
              href="/"
              className={`${styles['button']} ${styles['button-info']}`}
            >
              {nav_link_all_recipes}
            </a>
            <a
              href="/add"
              className={`${styles['button']} ${styles['button-success']}`}
            >
              {nav_link_add_recipe}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
