import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Course.module.css';
import courses from '../data/courses';

export async function getStaticPaths() {
  return {
    paths: courses.map((c) => ({ params: { courseId: c.id } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const id = params.courseId;
  return {
    props: {
      course: courses.find((c) => c.id === id),
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
