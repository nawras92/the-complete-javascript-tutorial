import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import messages from '../messages/filters';
import styles from '../styles/filter.module.css';

export default function FilterBox() {
  return (
    <div className={styles['container']}>
      <FilterByDate />
      <SearchBox />
      <FilterByMeal />
      <FilterByTime />
      <div>
        <ClearFilter href="/" name={messages['clear']} />
      </div>
    </div>
  );
}

// Filter by Duration/total time
const FilterByTime = () => {
  const [minValue, setMinValue] = useState(5);
  const [maxValue, setMaxValue] = useState(240);
  const router = useRouter();
  const query = router?.query || {};
  const { minDuration, maxDuration, ...newQuery } = query;

  return (
    <div className={styles['section']}>
      <p className={styles['section-title']}>
        {messages['filter_by_duration']}
      </p>
      <div>
        <p className={styles['section-text']}>
          {messages['set_min_value']}:{minValue} {messages.minute}
        </p>
        <input
          type="range"
          min="5"
          max="240"
          step="5"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
        />
      </div>
      <div>
        <p className={styles['section-text']}>
          {messages['set_max_value']}:{maxValue} {messages.minute}
        </p>
        <input
          type="range"
          min="5"
          max="240"
          step="5"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
        />
      </div>
      <Link
        href={{
          pathname: '/',
          query: {
            ...query,
            minDuration: minValue,
            maxDuration: maxValue,
          },
        }}
        className={`${styles['section-button']} ${styles['button-success']}`}
      >
        {messages['apply']}
      </Link>
      <ClearFilter
        href={{
          pathname: '/',
          query: newQuery,
        }}
        name={messages['clear_duration']}
      />
    </div>
  );
};

// Filter By meal
const FilterByMeal = () => {
  const router = useRouter();
  const query = router?.query || {};
  const { meal, ...newQuery } = query;
  return (
    <div className={styles['section']}>
      <p className={styles['section-title']}>{messages['filter_by_meal']}</p>
      <Link
        href={{
          pathname: '/',
          query: {
            ...query,
            meal: 'breakfast',
          },
        }}
        className={`${styles['section-button']} ${
          meal === 'breakfast' ? styles['active'] : ''
        }`}
      >
        {messages['breakfast']}
      </Link>
      <Link
        href={{
          pathname: '/',
          query: {
            ...query,
            meal: 'lunch',
          },
        }}
        className={`${styles['section-button']} ${
          meal === 'lunch' ? styles['active'] : ''
        }`}
      >
        {messages['lunch']}
      </Link>
      <Link
        href={{
          pathname: '/',
          query: {
            ...query,
            meal: 'dinner',
          },
        }}
        className={`${styles['section-button']} ${
          meal === 'dinner' ? styles['active'] : ''
        }`}
      >
        {messages['dinner']}
      </Link>
      <ClearFilter
        href={{
          pathname: '/',
          query: newQuery,
        }}
        name={messages['clear_meal']}
      />
    </div>
  );
};
// Search Box
const SearchBox = () => {
  const router = useRouter();
  const routerQuery = router?.query || {};
  const { searchTerm: st, ...newQuery } = routerQuery;

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles['section']}>
      <p className={styles['section-title']}>{messages['search_by_term']}</p>
      <input
        value={searchTerm}
        onChange={handleChange}
        className={styles['section-input']}
        type="text"
      />
      <Link
        href={{
          pathname: '/',
          query: {
            ...routerQuery,

            searchTerm,
          },
        }}
        className={styles['section-button']}
      >
        {messages['search']}
      </Link>
      <ClearFilter
        href={{
          pathname: '/',
          query: newQuery,
        }}
        name={messages['clear_search']}
      />
    </div>
  );
};

// Filter By Date
const FilterByDate = () => {
  const router = useRouter();
  const query = router?.query || {};
  const sort = router?.query?.sort;
  return (
    <div className={styles['section']}>
      <p className={styles['section-title']}>{messages['filter_by_date']}</p>
      <Link
        href={{
          pathname: '/',
          query: {
            ...query,
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
            ...query,
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

const ClearFilter = (props) => {
  const { href, name } = props;

  return (
    <Link
      href={href}
      className={`${styles['section-button']} ${styles['button-danger']}`}
    >
      {name}
    </Link>
  );
};
