import Link from 'next/link';
import styles from '../../styles/auth.module.css';
import messages from '../../messages/auth';
import LogoutBtn from '../../components/LogoutBtn';

export default function LogoutPage() {
  return (
    <div className={styles['container']}>
      <div className={styles['container-inner']}>
        <h1>{messages['logout_heading']}</h1>
        <Link href="/">{messages['cancel']}</Link>
        <LogoutBtn />
      </div>
    </div>
  );
}
