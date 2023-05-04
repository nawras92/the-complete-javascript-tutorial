import { GeneralControls } from '../components/Controls';
import RecipeForm from '../components/RecipeForm';

export default function AddPage() {
  const initialValues = {
    title: '',
    description: '',
    meal: 'Breakfast',
    steps: '',
    ingredients: '',
    cook_time: 10,
    preparation_time: 20,
    total_time: 30,
    servings: 2,
    notes: '',
  };
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Add New Recipe</h1>
        <GeneralControls showAdd={false} />
      </header>
      <div className="page-form">
        <RecipeForm initialValues={initialValues} />
      </div>
    </div>
  );
}
