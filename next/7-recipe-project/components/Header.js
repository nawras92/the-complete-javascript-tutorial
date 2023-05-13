import styles from '../styles/header.module.css';

export default function Header() {
  const handleLogout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
    });
    const data = await response.json();
    console.log(data);
  };
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
      </ul>
      <div className={styles['header-admin']}>
        <a className={styles['button']} href="/dashboard">
          Dashboard
        </a>
        <a className={styles['button']} href="/login">
          Login
        </a>
        <button className={styles['button']} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}
