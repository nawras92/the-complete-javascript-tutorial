import { useState } from 'react';
import styles from '../styles/Home.module.css';

// Client Side Rendering
export default function HomePage() {
  const [text, setText] = useState(null);
  const url = 'https://api.adviceslip.com/advice';
  const handleClick = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setText(data?.slip?.advice || 'no advice for you');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Random advice</h1>
      <button onClick={handleClick} className={styles.button}>
        Get one
      </button>
      <p className={styles.text}>{text && text}</p>
    </div>
  );
}
