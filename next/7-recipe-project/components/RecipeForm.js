import { useState } from 'react';
import { uploadThumbnail } from '../api/recipe';
import { BACKEND_URL } from '../my-config';
import styles from '../styles/recipe-form.module.css';
import messages from '../messages/recipe-form';
import { validateRecipeForm } from '../utils/helpers';
import { sanitizeString } from '../utils/helpers';

export default function RecipeForm(props) {
  const {
    initialValues,
    method = 'POST',
    apiPoint,
    args,
    editForm = false,
  } = props;
  console.log(initialValues);

  // Manage State
  const [formData, setFormData] = useState(initialValues);
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(false);

  // Handle Change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    //Validation
    const { isValid, errors: myErrors } = validateRecipeForm({
      ...formData,
      [name]: value,
    });
    if (isValid) {
      setValid(true);
      setErrors({
        ...errors,
        [name]: '',
      });
    } else {
      setValid(false);
      setErrors({
        ...errors,
        [name]: myErrors[name],
      });
    }
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    // Sanitize String
    const sanitizedData = {
      ...formData,
      title: sanitizeString(formData?.title),
      description: sanitizeString(formData?.description),
    };
    // validate sanitized Data
    const { isValid, errors: myErrors } = validateRecipeForm(sanitizedData);
    if (isValid) {
      setValid(true);
    } else {
      setValid(false);
      setErrors(myErrors);
    }

    if (isValid) {
      try {
        const response = await fetch(apiPoint, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: sanitizedData, id: args?.id }),
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
    }
  };
  /* Handle Thumbnail*/
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailMessage, setThumbnailMessage] = useState('');
  // User Select image
  const handleChangeThumbnail = (e) => {
    const files = e.target.files;
    setThumbnail(files[0]);
  };
  // User clicks on upload image
  const handleUploadThumbnail = async (e) => {
    e.preventDefault();
    // Create form Data
    const form = new FormData();
    form.append('files', thumbnail);
    try {
      const response = await fetch(uploadThumbnail, {
        method: 'POST',
        body: form,
      });
      const data = await response.json();
      const { error } = data;
      if (!response.ok) {
        setErrors({
          ...errors,
          thumbnail: messages['thumbnail_error'],
        });
        throw new Error(`${error.name}: ${error.message}`);
      }
      //Success
      //handle here
      //1- Remove Errors
      setErrors({
        ...errors,
        thumbnail: '',
      });
      //2- get the thumbnail id
      const thumbnailId = data[0]?.id;
      setFormData({
        ...formData,
        thumbnail: thumbnailId,
      });
      // 3- set success message
      setThumbnailMessage(messages['thumbnail_uploaded']);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles['form-container']}>
      <form className={styles['form']} onSubmit={handleSubmit}>
        {message && <div className={styles['message']}>{message}</div>}
        <div className={styles['form-group']}>
          <label htmlFor="title">{messages['title_field']}</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          {errors?.title && (
            <p className={styles['error-text']}>{errors.title}</p>
          )}
          <p className={styles['helper-text']}>
            {messages['title_helper_text']}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="description">{messages['description_field']}</label>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors?.description && (
            <p className={styles['error-text']}>{errors.description}</p>
          )}
          <p className={styles['helper-text']}>
            {messages['description_helper_text']}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="thumbnail">{messages['thumbnail_field']}</label>
          <input
            type="file"
            name="thumbnail"
            accept="images/*"
            onChange={handleChangeThumbnail}
          />
          <button
            className={styles['upload-button']}
            onClick={handleUploadThumbnail}
          >
            {messages['thumbnail_upload']}
          </button>
          {thumbnailMessage && (
            <p className={styles['success-text']}>{thumbnailMessage}</p>
          )}
          {errors?.thumbnail && (
            <p className={styles['error-text']}>{errors.thumbnail}</p>
          )}
          <p className={styles['helper-text']}>
            {messages['thumbnail_helper_text']}
          </p>
          {/* User selected a thumbnail */}
          {thumbnail && (
            <>
              <p>{messages['new_thumbnail']}</p>
              <button
                className={styles['delete-button']}
                onClick={() => setThumbnail(null)}
              >
                {messages['thumbnail_delete']}
              </button>
              <img
                className={styles['preview-image']}
                src={window.URL.createObjectURL(thumbnail)}
                alt="thumbnail"
              />
            </>
          )}
          {/* Recipe already added thumbnail */}
          {formData?.thumbnail?.data && (
            <>
              <p>{messages['old_thumbnail']}</p>
              <img
                className={styles['preview-image']}
                src={`${BACKEND_URL}${formData?.thumbnail?.data?.attributes?.url}`}
                alt="thumbnail"
              />
            </>
          )}
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="steps">{messages['steps_field']}</label>
          <textarea
            type="text"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
          ></textarea>
          <p className={styles['helper-text']}>
            {messages['steps_helper_text']}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="ingredients">{messages['ingredients_field']}</label>
          <textarea
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
          ></textarea>
          <p className={styles['helper-text']}>
            {messages['ingredients_helper_text']}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="cook_time">{messages['cook_time_field']}</label>
          <input
            type="number"
            name="cook_time"
            value={formData.cook_time}
            onChange={handleChange}
          />
          <p className={styles['helper-text']}>
            {messages['cook_time_helper_text']}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="preparation_time">
            {messages['preparation_time_field']}
          </label>
          <input
            type="number"
            name="preparation_time"
            value={formData.preparation_time}
            onChange={handleChange}
          />
          <p className={styles['helper-text']}>
            {messages['preparation_time_helper_text']}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="total_time">{messages['total_time_field']}</label>
          <input
            type="number"
            name="total_time"
            value={formData.total_time}
            onChange={handleChange}
          />
          <p className={styles['helper-text']}>
            {messages['total_time_helper_text']}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="servings">{messages['servings_field']}</label>
          <input
            type="number"
            name="servings"
            value={formData.servings}
            onChange={handleChange}
          />
          <p className={styles['helper-text']}>
            {messages['servings_helper_text']}
          </p>
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="meal">{messages['field_meal']}</label>
          <select name="meal" value={formData.meal} onChange={handleChange}>
            <option value="Breakfast">{messages['meal_breakfast']}</option>
            <option value="Lunch">{messages['meal_lunch']}</option>
            <option value="Dinner">{messages['meal_dinner']}</option>
          </select>
          {errors?.meal && (
            <p className={styles['error-text']}>{errors.meal}</p>
          )}
          <p className={styles['helper-text']}>
            {messages['meal_helper_text']}
          </p>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="notes">{messages['notes_field']}</label>
          <textarea
            type="text"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
          <p className={styles['helper-text']}>
            {messages['notes_helper_text']}
          </p>
        </div>

        <div className={styles['form-group']}>
          <button disabled={!valid} className={styles['button']} type="submit">
            {editForm ? messages['submit_edit'] : messages['submit_add']}
          </button>
        </div>
      </form>
    </div>
  );
}
