'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import styles from '../styles/form.module.css';
import messages from '../messages/form';

export default function ArticleForm(props) {
  const { type, articleId } = props;
  const [message, setMessage] = useState('');

  const initialValues = {
    title: '',
    content: '',
    description: '',
    author: '',
    category: '',
    keywords: '',
  };

  // Get Article
  //
  useEffect(() => {
    async function getArticle() {
      if (type === 'edit') {
        const response = await fetch(`/articles/api?id=${articleId}`);
        const data = await response.json();
        if (data?.article) {
          setFormValues(data?.article);
        }
      }
    }
    getArticle();
  }, []);

  const [formValues, setFormValues] = useState(initialValues);

  // Handle Change
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const apiPoint =
      type === 'edit' ? `/articles/api?id=${articleId}` : '/articles/api';
    const method = type === 'edit' ? 'PUT' : 'POST';
    const successMessage =
      type === 'edit' ? messages['article_edited'] : messages['article_added'];
    // Fetch Request
    const response = await fetch(apiPoint, {
      method,
      body: JSON.stringify(formValues),
    });
    const data = await response.json();
    if (data?.error) {
      setMessage(data?.error);
    } else {
      setMessage(successMessage);
    }
  };
  return (
    <div className={styles['container']}>
      <div className={styles['container-inner']}>
        <form className={styles['form']}>
          <h1>{type === 'edit' ? messages['edit'] : messages['add']}</h1>
          {message && (
            <div className={styles['form-alert']}>
              <p>{message}</p>
            </div>
          )}
          <div className={styles['form-group']}>
            <label htmlFor="title">{messages.title}</label>
            <input
              value={formValues.title}
              onChange={handleChange}
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="description">{messages.description}</label>
            <textarea
              value={formValues.description}
              onChange={handleChange}
              name="description"
              id="description"
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="content">{messages.content}</label>
            <textarea
              value={formValues.content}
              onChange={handleChange}
              name="content"
              id="content"
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="author">{messages.author}</label>
            <input
              value={formValues.author}
              onChange={handleChange}
              type="text"
              name="author"
              id="author"
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="category">{messages.category}</label>
            <input
              value={formValues.category}
              onChange={handleChange}
              type="text"
              name="category"
              id="category"
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="category">{messages.keywords}</label>
            <input
              value={formValues.keywords}
              onChange={handleChange}
              type="text"
              name="keywords"
              id="keywords"
            />
          </div>
          <button onClick={handleSubmit} className={styles['submit-button']}>
            {type === 'edit' ? messages['editNow'] : messages['addNow']}
          </button>
        </form>
      </div>
    </div>
  );
}
