import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import useUser from '../hooks/useUser';
import { nav_link_homepage } from '../messages';
import { nav_link_login } from '../messages';
import { nav_link_register } from '../messages';
import { nav_link_dashboard } from '../messages';
import { nav_link_logout } from '../messages';
import { nav_link_add_recipe } from '../messages';
import { nav_link_my_recipes } from '../messages';

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
            {nav_link_homepage}
          </a>
        </li>
      </ul>
      <div className={styles['header-admin']}>
        <a className={styles['button']} href="/login">
          {nav_link_login}
        </a>
        <a className={styles['button']} href="/register">
          {nav_link_register}
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
            {nav_link_homepage}
          </a>
        </li>
        <li className={styles['header-nav-item']}>
          <a className={styles['header-nav-link']} href="/add">
            {nav_link_add_recipe}
          </a>
        </li>
        <li className={styles['header-nav-item']}>
          <a className={styles['header-nav-link']} href="/dashboard/recipes">
            {nav_link_my_recipes}
          </a>
        </li>
      </ul>
      <div className={styles['header-admin']}>
        <a className={styles['button']} href="/dashboard">
          {nav_link_dashboard}
        </a>
        <button className={styles['button']} onClick={handleLogout}>
          {nav_link_logout}
        </button>
      </div>
    </header>
  );
}
