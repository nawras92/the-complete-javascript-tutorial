import Link from 'next/link';
import styles from '../styles/pagination.module.css';
import messages from '../messages/pagination.js';

const Pagination = (props) => {
  const { totalPages, currentPage } = props;
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  ).reverse();

  // Configure previous and next page
  const previousPage = currentPage <= 1 ? 1 : parseInt(currentPage) - 1;
  const nextPage =
    currentPage >= totalPages ? pageNumbers[0] : parseInt(currentPage) + 1;

  return (
    <nav style={{ marginBottom: '10rem' }} className={styles['pagination']}>
      <Link
        className={`${styles['page-item']} ${
          currentPage == 1 ? styles['disabled'] : ''
        }`}
        href={{
          pathname: '/',
          query: {
            page: previousPage,
          },
        }}
      >
        {messages.previous}
      </Link>
      {totalPages &&
        pageNumbers.map((i) => (
          <Link
            href={{
              pathname: '/',
              query: {
                page: i,
              },
            }}
            key={i}
            className={`${styles['page-item']} ${
              currentPage === i ? styles['active'] : ''
            }`}
          >
            {i}
          </Link>
        ))}
      <Link
        className={`${styles['page-item']} ${
          currentPage >= totalPages ? styles['disabled'] : ''
        }`}
        href={{
          pathname: '/',
          query: {
            page: nextPage,
          },
        }}
      >
        {messages.next}
      </Link>
    </nav>
  );
};

export default Pagination;
