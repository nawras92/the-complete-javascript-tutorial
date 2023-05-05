import { getOne } from '../api/recipe';
import { GeneralControls } from '../components/Controls';
import { SingleControls } from '../components/Controls';

export default function HomePage(props) {
  const { recipe } = props;
  return (
    <div className="page-container">
      <GeneralControls />
      <header className="page-header">
        <h1>{recipe.title}</h1>
      </header>
      <p>{recipe.description}</p>
      <p>Steps: {recipe.steps}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <SingleControls id={recipe.id} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  const response = await fetch(getOne(id));
  const { data } = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  const recipe = {
    id: data.id,
    ...data.attributes,
  };

  return {
    props: {
      recipe,
    },
  };
}
