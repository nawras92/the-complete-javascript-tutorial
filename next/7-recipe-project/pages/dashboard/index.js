import styles from '../../styles/dashboard.module.css';
import useUser from '../../hooks/useUser';

export default function DashboardPage() {
  useUser({ redirectTo: true });
  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['dashboard']}>
        <h1 className={styles['dashboard-welcome']}>
          Welcome to Recipe Dashboard
        </h1>
        <div className={styles['button-group']}>
          <a
            href="/dashboard/recipes"
            className={`${styles['button']} ${styles['button-warning']}`}
          >
            My Recipes
          </a>
          <a
            href="/"
            className={`${styles['button']} ${styles['button-info']}`}
          >
            All Recipes
          </a>
          <a
            href="/add"
            className={`${styles['button']} ${styles['button-success']}`}
          >
            Add Recipe
          </a>
        </div>{' '}
      </div>
    </div>
  );
}
