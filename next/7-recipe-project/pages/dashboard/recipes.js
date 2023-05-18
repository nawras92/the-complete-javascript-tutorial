import styles from '../../styles/dashboard.module.css';

export default function MyRecipesPage(props) {
  const { recipes } = props;

  const handleDelete = async (id) => {
    const result = window.confirm(
      'Are you sure you want to delete this recipe?'
    );
    if (result) {
      try {
        // Send delete request to the backend
        const response = await fetch('/api/deleteRecipe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id }),
        });
        const returnedData = await response.json();
        const { ok, message } = returnedData;
        if (!ok) {
          throw new Error(message);
        }
        //Success
        // reload page on delete
        window.location.reload();

        console.log(message);
      } catch (e) {
        console.log(e);
      }
    }

    //error
  };
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
            {recipes &&
              recipes.map((r, i) => {
                return (
                  <tr key={i}>
                    <td>#{r.id}</td>
                    <td>
                      <a href={`/${r.id}`}>{r.title}</a>
                    </td>
                    <td>{r.description}</td>
                    <td>
                      <a
                        href={`/edit/${r.id}`}
                        className={`${styles['button']} ${styles['button-edit']}`}
                      >
                        Edit
                      </a>
                    </td>
                    <td>
                      <a
                        onClick={() => handleDelete(r.id)}
                        className={`${styles['button']} ${styles['button-delete']}`}
                      >
                        Delete
                      </a>
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

export async function getServerSideProps(context) {
  try {
    const url = 'http://localhost:3000/api/my-recipes';
    // Get User Id
    const { req } = context;
    const data = req.cookies['LWNUser'];
    const { id } = JSON.parse(data);
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ userId: id }),
    });
    if (!response.ok) {
      throw new Error('Error in requesting api/my-recipes');
    }
    const { recipes } = await response.json();
    return {
      props: {
        recipes,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        recipes: null,
      },
    };
  }
}
