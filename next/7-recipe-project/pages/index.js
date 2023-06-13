import qs from 'qs';
import { getAll } from '../api/recipe';
import { getAllWithPagination } from '../api/recipe';
import { getAllWithQuery } from '../api/recipe';
import Recipe from '../components/Recipe';
import Pagination from '../components/Pagination';
import FilterBox from '../components/FilterBox';
import Layout from '../components/Layout';
import styles from '../styles/recipe.module.css';
import { homepage_title } from '../messages';

export default function HomePage(props) {
  const { recipes } = props;
  const { currentPage, pageCount } = props;
  return (
    <Layout title={homepage_title}>
      <FilterBox />
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
  const sort = context?.query?.sort || 'desc';
  const searchTerm = context?.query?.searchTerm || '';
  const meal = context?.query?.meal || '';
  const minDuration = context?.query?.minDuration || 5;
  const maxDuration = context?.query?.maxDuration || 240;

  const queryParams = {
    sort: [`updatedAt:${sort}`],
    filters: {
      $or: [
        {
          title: {
            $contains: searchTerm,
          },
        },
        {
          description: {
            $contains: searchTerm,
          },
        },
        {
          meal: {
            $eqi: meal,
          },
        },
        {
          total_time: {
            $between: [minDuration, maxDuration],
          },
        },
      ],
    },
    pagination: {
      pageSize,
      page: currentPage,
    },
  };
  // build query string
  const queryString = qs.stringify(queryParams, {});

  const response = await fetch(getAllWithQuery(queryString));
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
