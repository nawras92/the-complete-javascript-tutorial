import Link from 'next/link';
import styles from '../styles/pagination.module.css';

export default function CustomDataGrid(props) {
  const { pathname, oldQuery, currentPage, numberOfPages } = props;
  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);
  return (
    <div className={styles['pagination']}>
      {pages &&
        pages.map((p) => (
          <Link
            key={p}
            href={{
              pathname,
              query: {
                ...oldQuery,
                page: p,
              },
            }}
            className={p == currentPage ? styles['active-page'] : ''}
          >
            {p}
          </Link>
        ))}
    </div>
  );
}
