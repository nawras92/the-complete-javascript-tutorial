import { useState } from 'react';
import { useEffect } from 'react';
import RecipeForm from '../components/RecipeForm';
import Layout from '../components/Layout';
import useUser from '../hooks/useUser';
import { add_recipe_page_title } from '../messages';

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
    <Layout title={add_recipe_page_title}>
      <div className="page-container">
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
    </Layout>
  );
}
