import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import useUser from '../hooks/useUser';

export default function Header() {
  const user = useUser();
  const router = useRouter();
  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
    });
    router.push('/');
    window.location.reload();
  };
  if (user) {
    return <LoggedInHeader handleLogout={handleLogout} />;
  }
  return <NonLoggedInHeader />;
}
// NOnLoggedIn Header
function NonLoggedInHeader() {
  return (
    <header className={styles['header']}>
      <ul className={styles['header-nav']}>
        <li className={styles['header-nav-item']}>
          <a className={styles['header-nav-link']} href="/">
            Home
          </a>
        </li>
      </ul>
      <div className={styles['header-admin']}>
        <a className={styles['button']} href="/login">
          Login
        </a>
        <a className={styles['button']} href="/register">
          Register
        </a>
      </div>
    </header>
  );
}

// LoggedIn Header
function LoggedInHeader(props) {
  const { handleLogout } = props;
  return (
    <header className={styles['header']}>
      <ul className={styles['header-nav']}>
        <li className={styles['header-nav-item']}>
          <a className={styles['header-nav-link']} href="/">
            Home
          </a>
        </li>
        <li className={styles['header-nav-item']}>
          <a className={styles['header-nav-link']} href="/add">
            Add Recipe
          </a>
        </li>
        <li className={styles['header-nav-item']}>
          <a className={styles['header-nav-link']} href="/dashboard/recipes">
            My Recipes
          </a>
        </li>
      </ul>
      <div className={styles['header-admin']}>
        <a className={styles['button']} href="/dashboard">
          Dashboard
        </a>
        <button className={styles['button']} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}
