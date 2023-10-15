'use client';

import styles from '../styles/table.module.css';
import messages from '../messages/main';

export default function DeleteArticle(props) {
  const { articleId } = props;

  const handleDelete = async (e) => {
    e.preventDefault();
    const confirmDeletion = confirm(messages['confirm_delete']);
    if (confirmDeletion) {
      const response = await fetch(`/articles/api?id=${articleId}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      alert(result?.message);
      window.location.reload();
    }
  };
  return (
    <button onClick={handleDelete} className={styles['btn-delete']}>
      {messages['delete']}
    </button>
  );
}
