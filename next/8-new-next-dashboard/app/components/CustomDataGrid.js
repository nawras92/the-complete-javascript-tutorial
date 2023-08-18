import styles from '../styles/table.module.css';
import FilterBox from './FilterBox';
import messages from '../messages/main';

export default function CustomDataGrid(props) {
  const { data: articles } = props;
  return (
    <div className={styles['container']}>
      <div className={styles['inner-container']}>
        <FilterBox />

        <table className={styles['table']}>
          <thead>
            <tr>
              <th>{messages['article_id']}</th>
              <th>{messages['article_title']}</th>
              <th>{messages['article_actions']}</th>
            </tr>
          </thead>
          <tbody>
            {articles &&
              articles.map((article) => {
                return (
                  <tr key={article.id}>
                    <td>{article.id}</td>
                    <td>{article.title}</td>
                    <td>
                      <button className={styles['btn-show']}>
                        {messages['show']}
                      </button>
                      <button className={styles['btn-edit']}>
                        {messages['edit']}
                      </button>
                      <button className={styles['btn-delete']}>
                        {messages['delete']}
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
