import styles from '../styles/recipe.module.css';

export default function Recipe(props) {
  const {
    id,
    title,
    description,
    meal,
    cook_time,
    preparation_time,
    total_time,
    servings,
    updatedAt,
  } = props;
  return (
    <div className={styles['recipe']}>
      <img
        src="https://placehold.co/200x200"
        alt="thumbnail"
        className={styles['recipe-thumbnail']}
      />
      <div className={styles['recipe-details']}>
        <h3 className={styles['recipe-title']}>
          <a href={`/${id}`} className={styles['recipe-link']}>
            {title}
          </a>
        </h3>
        <p className={styles['recipe-description']}>{description}</p>

        <div className={styles['recipe-meta']}>
          <p className={styles['recipe-meta-item']}>
            <span>Updated at</span>
            <span>{updatedAt}</span>
          </p>
          <p className={styles['recipe-meta-item']}>
            <span>meal</span>
            <span>{meal}</span>
          </p>
          <p className={styles['recipe-meta-item']}>
            <span>servings</span>
            <span>{servings}</span>
          </p>
          <p className={styles['recipe-meta-item']}>
            <span>cook time</span>
            <span>{cook_time}</span>
          </p>
          <p className={styles['recipe-meta-item']}>
            <span>preparation time</span>
            <span>{preparation_time}</span>
          </p>
          <p className={styles['recipe-meta-item']}>
            <span>total time</span>
            <span>{total_time}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
