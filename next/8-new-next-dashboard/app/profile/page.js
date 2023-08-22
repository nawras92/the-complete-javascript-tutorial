import styles from '../styles/auth.module.css';

export default function ProfilePage() {
  return (
    <div className={styles['container']}>
      <div className={styles['container-inner']}>
        <p>User Email: email@mail.com</p>
        <p>User Firstname: Ali</p>
        <p>User lastName: Ola</p>
        <p>User password: 111</p>
      </div>
    </div>
  );
}
