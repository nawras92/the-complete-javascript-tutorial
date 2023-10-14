import messages from '../messages/main';
import styles from '../styles/dashboard.module.css';
import CustomDataGrid from '../components/CustomDataGrid';
import Pagination from '../components/Pagination';
import { nextUrl } from '../website-config';

async function fetchData() {
  const response = await fetch(nextUrl + '/articles/api', {
    next: {
      revalidate: 0,
    },
  });
  const result = await response.json();
  return result;
}

export default async function ArticlesPage(context) {
  const { searchParams } = context;
  const { searchTerm = '', page = 1 } = searchParams;

  // fetch data
  const result = await fetchData();

  // // Sorted articles
  // const sortedArticles = articles.sort(
  //   (a, b) => new Date(b.updateDate) - new Date(a.updateDate)
  // );

  // // Filter Articles
  // const filteredArticles = sortedArticles.filter((a) =>
  //   a.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // // Pagination Functionality
  // const itemsPerPage = 5;
  // const totalItems = filteredArticles.length;
  // const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  // const startIndex = (page - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const articlesForPage = filteredArticles.slice(startIndex, endIndex);

  const numberOfPages = 5;
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
              oldQuery={{ searchTerm }}
              currentPage={page}
              numberOfPages={numberOfPages}
            />
          </>
        )}
        {!result?.ok && <p>{result?.message} </p>}
      </main>
    </div>
  );
}
