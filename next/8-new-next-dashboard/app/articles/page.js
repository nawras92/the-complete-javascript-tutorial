import articles from '../data/articles';
import messages from '../messages/main';
import styles from '../styles/dashboard.module.css';
import CustomDataGrid from '../components/CustomDataGrid';
import Pagination from '../components/Pagination';

const sortedArticles = articles.sort(
  (a, b) => new Date(b.updateDate) - new Date(a.updateDate)
);

export default function ArticlesPage(context) {
  const { searchParams } = context;
  const { searchTerm = '', page = 1 } = searchParams;

  // Filter Articles
  const filteredArticles = sortedArticles.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Functionality
  const itemsPerPage = 5;
  const totalItems = filteredArticles.length;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const articlesForPage = filteredArticles.slice(startIndex, endIndex);

  return (
    <div>
      <header className={styles['header']}>
        <h1>
          {messages['dashboard']} - {messages['articles']}
        </h1>
      </header>
      <main>
        <CustomDataGrid data={articlesForPage} />
        <Pagination
          pathname="/articles"
          oldQuery={{ searchTerm }}
          currentPage={page}
          numberOfPages={numberOfPages}
        />
      </main>
    </div>
  );
}
