import { getAll } from '../api/recipe';
import Recipe from '../components/Recipe';
import { GeneralControls } from '../components/Controls';

export default function HomePage(props) {
  const { recipes } = props;
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Recipes Homepage</h1>
        <GeneralControls showAll={false} />
      </header>

      <div className="recipes-container">
        {recipes &&
          recipes.map((r) => {
            return <Recipe {...r} key={r.id} />;
          })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(getAll);
  const { data } = await response.json();

  const recipes = data.map((r) => ({
    id: r.id,
    ...r.attributes,
  }));

  return {
    props: {
      recipes,
    },
  };
}
