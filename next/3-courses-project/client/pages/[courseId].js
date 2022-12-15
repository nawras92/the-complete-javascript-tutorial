import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Course.module.css';

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.courseId;
  const url = `http://localhost:4000/courses/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: {
      course: data?.course,
    },
  };
}

export default function SingleCourse(props) {
  const { course } = props;
  return (
    <>
      <Head>
        <title>{course.title}</title>
        <meta name="description" content={course.description} />
      </Head>
      <div>
        <div>
          <h1 className={styles.title}>{course.title}</h1>
          <p className={styles.description}>{course.description}</p>
        </div>
        <Link className={styles.link} href="/">
          Go Home
        </Link>
      </div>
    </>
  );
}
