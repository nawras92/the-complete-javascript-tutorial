import { useState } from 'react';
import styles from '../styles/recipe-form.module.css';
import { recipe_title_field } from '../messages';
import { recipe_title_helper_text } from '../messages';
import { recipe_description_field } from '../messages';
import { recipe_description_helper_text } from '../messages';
import { recipe_steps_field } from '../messages';
import { recipe_steps_helper_text } from '../messages';
import { recipe_ingredients_field } from '../messages';
import { recipe_ingredients_helper_text } from '../messages';
import { recipe_notes_field } from '../messages';
import { recipe_notes_helper_text } from '../messages';
import { recipe_cook_time_field } from '../messages';
import { recipe_cook_time_helper_text } from '../messages';
import { recipe_preparation_time_field } from '../messages';
import { recipe_preparation_time_helper_text } from '../messages';
import { recipe_total_time_field } from '../messages';
import { recipe_total_time_helper_text } from '../messages';
import { recipe_servings_field } from '../messages';
import { recipe_servings_helper_text } from '../messages';
import { recipe_meal_field } from '../messages';
import { recipe_meal_helper_text } from '../messages';
import { recipe_meal_breakfast } from '../messages';
import { recipe_meal_lunch } from '../messages';
import { recipe_meal_dinner } from '../messages';
import { recipe_submit_add } from '../messages';
import { recipe_submit_edit } from '../messages';

export default function RecipeForm(props) {
  const {
    initialValues,
    method = 'POST',
    apiPoint,
    args,
    editForm = false,
  } = props;

  // Manage State
  const [formData, setFormData] = useState(initialValues);
  const [message, setMessage] = useState('');

  // Handle Change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch(apiPoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData, id: args?.id }),
      });
      const dataReturned = await response.json();
      const { ok, message } = dataReturned;
      if (!ok) {
        setMessage(message);
        throw new Error(message);
      }
      // Success
      setMessage(message);
      console.log(formData);
    } catch (e) {
      console.log('Error: ', e);
    }
  };
  return (
    <div className={styles['form-container']}>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <div className={styles['message']}>{message}</div>
        <div className={styles['form-group']}>
          <label htmlFor="title">{recipe_title_field}</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <p className={styles['helper-text']}>{recipe_title_helper_text} </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="description">{recipe_description_field}</label>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <p className={styles['helper-text']}>
            {recipe_description_helper_text}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="steps">{recipe_steps_field}</label>
          <textarea
            type="text"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
          ></textarea>
          <p className={styles['helper-text']}>{recipe_steps_helper_text}</p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="ingredients">{recipe_ingredients_field}</label>
          <textarea
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
          ></textarea>
          <p className={styles['helper-text']}>
            {recipe_ingredients_helper_text}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="cook_time">{recipe_cook_time_field}</label>
          <input
            type="number"
            name="cook_time"
            value={formData.cook_time}
            onChange={handleChange}
          />
          <p className={styles['helper-text']}>
            {recipe_cook_time_helper_text}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="preparation_time">
            {recipe_preparation_time_field}{' '}
          </label>
          <input
            type="number"
            name="preparation_time"
            value={formData.preparation_time}
            onChange={handleChange}
          />
          <p className={styles['helper-text']}>
            {recipe_preparation_time_helper_text}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="total_time">{recipe_total_time_field}</label>
          <input
            type="number"
            name="total_time"
            value={formData.total_time}
            onChange={handleChange}
          />
          <p className={styles['helper-text']}>
            {recipe_total_time_helper_text}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="servings">{recipe_servings_field}</label>
          <input
            type="number"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
          />
          <p className={styles['helper-text']}>{recipe_servings_helper_text}</p>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="meal">{recipe_meal_field}</label>
          <select name="meal" value={formData.meal} onChange={handleChange}>
            <option value="Breakfast">{recipe_meal_breakfast}</option>
            <option value="Lunch">{recipe_meal_lunch}</option>
            <option value="Dinner">{recipe_meal_dinner}</option>
          </select>
          <p className={styles['helper-text']}>{recipe_meal_helper_text}</p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="notes">{recipe_notes_field}</label>
          <textarea
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
          <p className={styles['helper-text']}>{recipe_notes_helper_text}</p>
        </div>

        <div className={styles['form-group']}>
          <button className={styles['button']} type="submit">
            {editForm ? recipe_submit_edit : recipe_submit_add}
          </button>
        </div>
      </form>
    </div>
  );
}
