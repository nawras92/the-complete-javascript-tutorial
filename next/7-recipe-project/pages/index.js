import { getAll } from '../api/recipe';
import Recipe from '../components/Recipe';
import Layout from '../components/Layout';
import styles from '../styles/recipe.module.css';
import { homepage_title } from '../messages';

export default function HomePage(props) {
  const { recipes } = props;
  return (
    <Layout title={homepage_title}>
      <div className="page-container">
        <div className={styles['recipes-container']}>
          {recipes &&
            recipes.map((r) => {
              return <Recipe {...r} key={r.id} />;
            })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await fetch(getAll);
  const { data } = await response.json();

  const recipes = data.map((r) => ({
    id: r.id,
    ...r.attributes,
  }));

  const sortedRecipes = recipes.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  return {
    props: {
      recipes: sortedRecipes,
    },
  };
}
