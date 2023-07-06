import Link from 'next/link';
import styles from './styles/dashboard.module.css';
import messages from './messages/main';
import articles from './data/articles';

const recentArticles = articles
  .sort((a, b) => new Date(b.updateDate) - new Date(a.updateData))
  .splice(0, 5);

export default function Homepage() {
  return (
    <div>
      <header className={styles['header']}>
        <h1>{messages['welcome']}</h1>
      </header>
      <div className={styles['content']}>
        <div className={styles['cards']}>
          <OverviewCard />
          <RecentArticles articles={recentArticles} />
          <ImportantLinksCard />
        </div>
      </div>
    </div>
  );
}

const ImportantLinksCard = () => {
  return (
    <div className={styles['card']}>
      <h2 className={styles['card-title']}>{messages['important_links']}</h2>
      <div className={styles['card-body']}>
        <div className={styles['card-btns']}>
          <Link className={styles['card-btn']} href="/articles/new">
            {messages['create_new_articles']}
          </Link>
          <Link className={styles['card-btn']} href="/articles/search">
            {messages['search_articles']}
          </Link>
        </div>
      </div>
    </div>
  );
};

const OverviewCard = () => {
  return (
    <div className={styles['card']}>
      <h2 className={styles['card-title']}>{messages['overview']}</h2>
      <div className={styles['card-body']}>
        <p className={styles['card-item']}>
          <span className={styles['card-item-key']}>
            {messages['total_articles']}
          </span>
          <span className={styles['card-item-value']}>50</span>
        </p>
        <p className={styles['card-item']}>
          <span className={styles['card-item-key']}>
            {messages['published_articles']}
          </span>
          <span className={styles['card-item-value']}>30</span>
        </p>
        <p className={styles['card-item']}>
          <span className={styles['card-item-key']}>{messages['draft']}</span>
          <span className={styles['card-item-value']}>20</span>
        </p>
      </div>
    </div>
  );
};

const RecentArticles = ({ articles }) => {
  return (
    <div className={styles['card']}>
      <h2 className={styles['card-title']}>{messages['recent_articles']}</h2>

      <div className={styles['content']}>
        <ul className={styles['card-list']}>
          {articles &&
            articles.map((article, index) => {
              return (
                <li key={index} className={styles['card-list-item']}>
                  <Link href={`/articles/${article.id}`}>{article.title}</Link>
                </li>
              );
            })}
        </ul>
        <Link className={styles['button']} href="/articles">
          {messages['view_all_articles']}
        </Link>
      </div>
    </div>
  );
};
