import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
  const url = 'http://localhost:4000/courses';
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: {
      courses: data?.courses,
    },
  };
}

export default function Home(props) {
  const { courses } = props;
  return (
    <>
      <Head>
        <title>Courses</title>
        <meta name="description" content="our beautiful courses" />
      </Head>
      <div>
        <h1 className={styles.title}>Courses</h1>
        <div className={styles.main}>
          {courses &&
            courses.map((c, i) => {
              return (
                <div key={i}>
                  <h3 className={styles.subHeading}>
                    <Link href={`/${c.id}`}>{c.title}</Link>
                  </h3>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
