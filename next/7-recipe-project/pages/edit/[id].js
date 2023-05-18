import { GeneralControls } from '../../components/Controls';
import RecipeForm from '../../components/RecipeForm';
import { getOne } from '../../api/recipe';
import { updateOne } from '../../api/recipe';
import useUser from '../../hooks/useUser';

export default function EditRecipePage(props) {
  useUser({ redirectTo: true });
  const { recipe } = props;
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Edit Recipe: {recipe.title}</h1>
        <GeneralControls />
      </header>
      <div className="page-form">
        <RecipeForm
          initialValues={recipe}
          method="POST"
          apiPoint="/api/editRecipe"
          args={{ id: recipe.id }}
        />
      </div>
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
