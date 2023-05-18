import { useState } from 'react';
import { useEffect } from 'react';
import { GeneralControls } from '../components/Controls';
import RecipeForm from '../components/RecipeForm';
import useUser from '../hooks/useUser';

export default function AddPage() {
  // Get User
  const user = useUser({ redirectTo: true });
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [user]);
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
        {currentUser && (
          <RecipeForm
            initialValues={{ ...initialValues, author: currentUser?.id }}
            apiPoint="/api/addRecipe"
            method="POST"
          />
        )}
      </div>
    </div>
  );
}
