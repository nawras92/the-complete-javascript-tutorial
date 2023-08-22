import Link from 'next/link';
import styles from '../styles/navlist.module.css';
import messages from '../messages/main';

export default function NavList(props) {
  const { loggedIn } = props;
  return (
    <nav className={styles.nav}>
      <ul className={styles['nav-list']}>
        <li className={styles['nav-list-item']}>
          <Link href="/" className={styles['nav-list-item-link']}>
            {messages['dashboard']}
          </Link>
        </li>
        <li className={styles['nav-list-item']}>
          <Link className={styles['nav-list-item-link']} href="/articles">
            {messages['articles']}
          </Link>
        </li>
        {loggedIn && (
          <div style={{ marginRight: 'auto' }}>
            <li className={styles['nav-list-item']}>
              <Link className={styles['nav-list-item-link']} href="/profile">
                {messages['profile']}
              </Link>
            </li>
            <li className={styles['nav-list-item']}>
              <Link
                className={styles['nav-list-item-link']}
                href="/auth/logout"
              >
                {messages['logout']}
              </Link>
            </li>
          </div>
        )}
        {!loggedIn && (
          <div style={{ marginRight: 'auto' }}>
            <li className={styles['nav-list-item']}>
              <Link className={styles['nav-list-item-link']} href="/auth/login">
                {messages['login']}
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}
