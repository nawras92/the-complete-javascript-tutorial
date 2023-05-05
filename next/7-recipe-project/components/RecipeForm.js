import { useState } from 'react';
import { addOne } from '../api/recipe';
import { accessToken } from '../api/recipe';

export default function RecipeForm(props) {
  const {
    initialValues,
    method = 'POST',
    apiPoint = addOne,
    okMessage = 'The recipe got added  successfully',
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
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ data: formData }),
      });
      if (!response.ok) {
        setMessage('something went wrong');
        throw new Error('something went wrong');
      }
      setMessage(okMessage);
    } catch (e) {
      console.log('Error: ', e);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="message">{message}</div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <p className="helper-text">Add Recipe title here</p>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <p className="helper-text">Add Recipe description here</p>
      </div>
      <div className="form-group">
        <label htmlFor="steps">Steps</label>
        <textarea
          type="text"
          name="steps"
          value={formData.steps}
          onChange={handleChange}
        ></textarea>
        <p className="helper-text">Add Recipe steps here</p>
      </div>
      <div className="form-group">
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          type="text"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
        ></textarea>
        <p className="helper-text">Add Ingredients steps here</p>
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea
          type="text"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>
        <p className="helper-text">Add notes steps here</p>
      </div>
      <div className="form-group">
        <label htmlFor="cook_time">Cook Time</label>
        <input
          type="number"
          name="cook_time"
          value={formData.cook_time}
          onChange={handleChange}
        />
        <p className="helper-text">Add Cook time title here</p>
      </div>
      <div className="form-group">
        <label htmlFor="preparation_time">Preparation Time</label>
        <input
          type="number"
          name="preparation_time"
          value={formData.preparation_time}
          onChange={handleChange}
        />
        <p className="helper-text">Add preparation time title here</p>
      </div>
      <div className="form-group">
        <label htmlFor="total_time">Total Time</label>
        <input
          type="number"
          name="total_time"
          value={formData.total_time}
          onChange={handleChange}
        />
        <p className="helper-text">Add total time title here</p>
      </div>
      <div className="form-group">
        <label htmlFor="servings">Serving</label>
        <input
          type="number"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
        />
        <p className="helper-text">Add Servings here</p>
      </div>

      <div className="form-group">
        <label htmlFor="meal">Meal</label>
        <select name="meal" value={formData.meal} onChange={handleChange}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <p className="helper-text">Add Meal here</p>
      </div>

      <div className="form-group">
        <button className="button" type="submit">
          Add Now
        </button>
      </div>
    </form>
  );
}
