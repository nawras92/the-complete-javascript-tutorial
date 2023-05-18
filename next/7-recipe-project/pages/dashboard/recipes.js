import styles from '../../styles/dashboard.module.css';

export default function MyRecipesPage(props) {
  return (
    <div className={styles['page-container']}>
      <div className={styles['page-header']}>
        <h1>My Recipes</h1>
      </div>
      <div className={styles['page-content']}>
        <table className={styles['table']}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Recipe Title</th>
              <th>Recipe Description</th>
              <th>Edit</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1</td>
              <td>
                <a href="/id">My title</a>
              </td>
              <td>my description</td>
              <td>
                <a
                  href="/edit/id"
                  className={`${styles['button']} ${styles['button-edit']}`}
                >
                  Edit
                </a>
              </td>
              <td>
                <a
                  onClick=""
                  className={`${styles['button']} ${styles['button-delete']}`}
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
