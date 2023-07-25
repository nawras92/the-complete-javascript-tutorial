import articles from '../data/articles';
import messages from '../messages/main';
import styles from '../styles/dashboard.module.css';
import CustomDataGrid from '../components/CustomDataGrid';

const sortedArticles = articles.sort(
  (a, b) => new Date(b.updateDate) - new Date(a.updateDate)
);

export default function ArticlesPage() {
  return (
    <div>
      <header className={styles['header']}>
        <h1>
          {messages['dashboard']} - {messages['articles']}
        </h1>
      </header>
      <main>
        <CustomDataGrid data={sortedArticles} />
      </main>
    </div>
  );
}
