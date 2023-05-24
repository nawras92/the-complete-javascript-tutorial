import ReactMarkdown from 'react-markdown';
import { getOne } from '../api/recipe';
import Layout from '../components/Layout';
import Recipe from '../components/Recipe';
import styles from '../styles/recipe.module.css';
import { recipes_ingredients } from '../messages';
import { recipes_steps } from '../messages';
import { recipes_notes } from '../messages';

export default function HomePage(props) {
  const { recipe } = props;
  return (
    <Layout title={recipe.title} description={recipe.description}>
      <div className={styles['recipe-container']}>
        <Recipe {...recipe} single={true} />
        <div className={styles['recipe-content']}>
          <div className={styles['recipe-card']}>
            <div className={styles['recipe-card-header']}>
              <h3> {recipes_ingredients}</h3>
            </div>

            <div className={styles['recipe-card-content']}>
              <ReactMarkdown>{recipe.ingredients}</ReactMarkdown>
            </div>
          </div>
          <div className={styles['recipe-card']}>
            <div className={styles['recipe-card-header']}>
              <h3> {recipes_steps}</h3>
            </div>

            <div className={styles['recipe-card-content']}>
              <ReactMarkdown>{recipe.steps}</ReactMarkdown>
            </div>
          </div>
        </div>
        <div className={styles['recipe-card']}>
          <div className={styles['recipe-card-header']}>
            <h3> {recipes_notes}</h3>
          </div>
          <div className={styles['recipe-card-content']}>{recipe.notes}</div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  const response = await fetch(getOne(id));
  const { data } = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  const recipe = {
    id: data.id,
    ...data.attributes,
  };

  return {
    props: {
      recipe,
    },
  };
}
