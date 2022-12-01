import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>OUr space</title>
      </Head>
      <div className={styles.section}>
        <h1 className={styles.heading}>Discover our space</h1>
      </div>
      <div className={styles.section1}>
        <p className={styles.text}>
          Amet blanditiis ducimus nihil natus perspiciatis. Numquam optio fugit
          dolorum laudantium eos sunt quisquam? Nulla amet nobis hic possimus
          pariatur Ex quis sint corrupti iste laborum pariatur perferendis Rerum
          quasi molestiae illum deleniti ratione maiores? Temporibus quidem esse
          sit asperiores natus quo commodi? A cum accusamus iusto libero enim?
          Suscipit
        </p>
      </div>
      <div className={styles.section2}>
        <p className={styles.footnote}>Keep Looking around</p>
      </div>
    </>
  );
}
