import messages from '../messages/main';
import styles from '../styles/dashboard.module.css';
import CustomDataGrid from '../components/CustomDataGrid';
import Pagination from '../components/Pagination';
import { nextUrl } from '../website-config';

async function fetchData(searchParams) {
  const queryStr = new URLSearchParams(searchParams).toString();

  const response = await fetch(nextUrl + '/articles/api?' + queryStr, {
    next: {
      revalidate: 0,
    },
  });
  const result = await response.json();
  return result;
}

export default async function ArticlesPage(context) {
  const { searchParams } = context;
  const { searchTerm = '', page = 1, perPage = 5 } = searchParams;

  // fetch data
  const result = await fetchData(searchParams);

  return (
    <div>
      <header className={styles['header']}>
        <h1>
          {messages['dashboard']} - {messages['articles']}
        </h1>
      </header>
      <main>
        {result?.ok && (
          <>
            <CustomDataGrid data={result?.data} />
            <Pagination
              pathname="/articles"
              oldQuery={{ searchTerm, perPage }}
              currentPage={page}
              numberOfPages={result?.meta?.totalPages}
            />
          </>
        )}
        {!result?.ok && <p>{result?.message} </p>}
      </main>
    </div>
  );
}
