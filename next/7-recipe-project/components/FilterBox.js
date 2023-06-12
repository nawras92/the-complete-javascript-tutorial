import { useRouter } from 'next/router';
import Link from 'next/link';
import messages from '../messages/filters';
import styles from '../styles/filter.module.css';

export default function FilterBox() {
  return (
    <div className={styles['container']}>
      <FilterByDate />
    </div>
  );
}

// Filter By Date
const FilterByDate = () => {
  const router = useRouter();
  const sort = router?.query?.sort;
  return (
    <div className={styles['section']}>
      <p className={styles['section-title']}>{messages['filter_by_date']}</p>
      <Link
        href={{
          pathname: '/',
          query: {
            sort: 'asc',
          },
        }}
        className={`${styles['section-button']} ${
          sort === 'asc' ? styles['active'] : ''
        }`}
      >
        {messages['filter_by_date_asc']}
      </Link>
      <Link
        href={{
          pathname: '/',
          query: {
            sort: 'desc',
          },
        }}
        className={`${styles['section-button']} ${
          sort === 'desc' ? styles['active'] : ''
        }`}
      >
        {messages['filter_by_date_desc']}
      </Link>
    </div>
  );
};
