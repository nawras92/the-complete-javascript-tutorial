import RecipeForm from '../../components/RecipeForm';
import Layout from '../../components/Layout';
import { getOne } from '../../api/recipe';
import useUser from '../../hooks/useUser';
import { edit_recipe_page_title } from '../../messages';

export default function EditRecipePage(props) {
  useUser({ redirectTo: true });
  const { recipe } = props;
  return (
    <Layout title={`${edit_recipe_page_title}: ${recipe.title}`}>
      <div className="page-container">
        <div className="page-form">
          <RecipeForm
            initialValues={recipe}
            method="POST"
            apiPoint="/api/editRecipe"
            args={{ id: recipe.id }}
            editForm={true}
          />
        </div>
      </div>
    </Layout>
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
