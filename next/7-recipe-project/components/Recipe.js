import Image from 'next/image';
import { BACKEND_URL } from '../my-config';
import styles from '../styles/recipe.module.css';
import { formatDate } from '../utils/helpers';
import { recipes_updated_at } from '../messages';
import { recipes_total_time } from '../messages';
import { recipes_preparation_time } from '../messages';
import { recipes_cook_time } from '../messages';
import { recipes_servings } from '../messages';
import { recipes_meal } from '../messages';

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
    thumbnail,
    single = false,
  } = props;
  return (
    <div className={styles['recipe']}>
      {!thumbnail?.data && (
        <Image
          src="/images/placeholder.svg"
          alt="thumbnail"
          className={styles['recipe-thumbnail']}
          width={200}
          height={200}
        />
      )}
      {thumbnail?.data && (
        <Image
          src={BACKEND_URL + thumbnail?.data?.attributes?.url}
          alt={
            thumbnail?.data?.attributes?.alternativeText || `${title} Thumbnail`
          }
          width={thumbnail?.data?.attributes?.width}
          height={thumbnail?.data?.attributes?.height}
          className={styles['recipe-thumbnail']}
        />
      )}
      <div className={styles['recipe-details']}>
        {!single && (
          <h3 className={styles['recipe-title']}>
            <a href={`/${id}`} className={styles['recipe-link']}>
              {title}
            </a>
          </h3>
        )}
        <p className={styles['recipe-description']}>{description}</p>

        <div className={styles['recipe-meta']}>
          <p className={styles['recipe-meta-item']}>
            <span>{recipes_updated_at}</span>
            <span>{formatDate(updatedAt)}</span>
          </p>
          <p className={styles['recipe-meta-item']}>
            <span>{recipes_meal}</span>
            <span>{meal}</span>
          </p>
          <p className={styles['recipe-meta-item']}>
            <span>{recipes_servings}</span>
            <span>{servings}</span>
          </p>
          <p className={styles['recipe-meta-item']}>
            <span>{recipes_cook_time}</span>
            <span>{cook_time}</span>
          </p>
          <p className={styles['recipe-meta-item']}>
            <span>{recipes_preparation_time}</span>
            <span>{preparation_time}</span>
          </p>
          <p className={styles['recipe-meta-item']}>
            <span>{recipes_total_time}</span>
            <span>{total_time}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
