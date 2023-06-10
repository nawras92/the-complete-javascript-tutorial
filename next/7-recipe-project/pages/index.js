import { getAll } from '../api/recipe';
import { getAllWithPagination } from '../api/recipe';
import Recipe from '../components/Recipe';
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';
import styles from '../styles/recipe.module.css';
import { homepage_title } from '../messages';

export default function HomePage(props) {
  const { recipes } = props;
  const { currentPage, pageCount } = props;
  return (
    <Layout title={homepage_title}>
      <div className="page-container">
        <div className={styles['recipes-container']}>
          {recipes &&
            recipes.map((r) => {
              return <Recipe {...r} key={r.id} />;
            })}
        </div>
      </div>
      <Pagination totalPages={pageCount} currentPage={currentPage} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  /*Pagination*/
  const pageSize = 4;
  const currentPage = context?.query?.page || 1;

  const response = await fetch(getAllWithPagination(currentPage, pageSize));
  const { data, meta } = await response.json();
  const { pagination } = meta;
  const { pageCount } = pagination;

  const recipes = data.map((r) => ({
    id: r.id,
    ...r.attributes,
  }));

  const sortedRecipes = recipes.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );

  return {
    props: {
      recipes: sortedRecipes,
      currentPage,
      pageCount,
    },
  };
}
