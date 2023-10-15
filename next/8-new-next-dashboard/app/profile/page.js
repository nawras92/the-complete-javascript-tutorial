import styles from '../styles/auth.module.css';
import UserCard from '../components/UserCard';

export default function ProfilePage() {
  return (
    <div className={styles['container']}>
      <div className={styles['container-inner']}>
        <UserCard />
      </div>
    </div>
  );
}
