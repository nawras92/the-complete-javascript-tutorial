'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/table.module.css';

export default function FilterBox() {
  // Get Search Params
  const searchParams = useSearchParams();
  const querySearchTerm = searchParams.get('searchTerm') || '';

  const [searchTerm, setSearchTerm] = useState(querySearchTerm);

  return (
    <div className={styles['filter-box']}>
      <input
        type="text"
        placeholder="search articles"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Link
        href={{
          pathname: '/articles',
          query: {
            searchTerm,
          },
        }}
      >
        Search
      </Link>
    </div>
  );
}
