import Link from 'next/link';
import styles from '../styles/navlist.module.css';
import messages from '../messages/main';

export default function NavList() {
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
        <li className={styles['nav-list-item']}>
          <Link className={styles['nav-list-item-link']} href="/profile">
            {messages['profile']}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
