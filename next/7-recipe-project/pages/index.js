import { getAll } from '../api/recipe';
import Recipe from '../components/Recipe';
import Layout from '../components/Layout';

export default function HomePage(props) {
  const { recipes } = props;
  const title = 'this is homepage';
  return (
    <Layout title={title}>
      <div className="page-container">
        <div className="recipes-container">
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
