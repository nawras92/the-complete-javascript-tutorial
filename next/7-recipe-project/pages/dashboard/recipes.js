import styles from '../../styles/dashboard.module.css';
import Layout from '../../components/Layout';
import { my_recipes_page_title } from '../../messages';
import { my_recipes_page_recipe_title } from '../../messages';
import { my_recipes_page_recipe_id } from '../../messages';
import { my_recipes_page_recipe_description } from '../../messages';
import { my_recipes_page_recipe_edit } from '../../messages';
import { my_recipes_page_recipe_delete } from '../../messages';
import { my_recipes_page_recipe_delete_prompt } from '../../messages';

export default function MyRecipesPage(props) {
  const { recipes } = props;

  const handleDelete = async (id) => {
    const result = window.confirm(my_recipes_page_recipe_delete_prompt);
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
    <Layout title={my_recipes_page_title}>
      <div className={styles['page-container']}>
        <div className={styles['page-content']}>
          <table className={styles['table']}>
            <thead>
              <tr>
                <th>{my_recipes_page_recipe_id}</th>
                <th>{my_recipes_page_recipe_title}</th>
                <th>{my_recipes_page_recipe_description}</th>
                <th>{my_recipes_page_recipe_edit}</th>
                <th>{my_recipes_page_recipe_delete}</th>
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
                          {my_recipes_page_recipe_edit}
                        </a>
                      </td>
                      <td>
                        <a
                          onClick={() => handleDelete(r.id)}
                          className={`${styles['button']} ${styles['button-delete']}`}
                        >
                          {my_recipes_page_recipe_delete}
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
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
