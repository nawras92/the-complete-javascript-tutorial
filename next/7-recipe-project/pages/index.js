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
      <div className={styles['wrapper']}>
        <div className={styles['content']}>
          <div className="page-container">
            <div className={styles['recipes-container']}>
              {recipes &&
                recipes.map((r) => {
                  return <Recipe {...r} key={r.id} />;
                })}
            </div>
          </div>
          <Pagination totalPages={pageCount} currentPage={currentPage} />
        </div>
        <div className={styles['sidebar']}>
          <FilterBox />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  /*Pagination*/
  const pageSize = 4;
  const currentPage = context?.query?.page || 1;
  const sort = context?.query?.sort || 'desc';
  const searchTerm = context?.query?.searchTerm;
  const meal = context?.query?.meal;
  const minDuration = context?.query?.minDuration;
  const maxDuration = context?.query?.maxDuration;

  const queryParams = {
    sort: [`updatedAt:${sort}`],
    filters: {
      $and: [
        searchTerm && {
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
          ],
        },
        meal && {
          meal: {
            $eqi: meal,
          },
        },
        (minDuration || maxDuration) && {
          total_time: {
            $between: [minDuration, maxDuration],
          },
        },
      ].filter(Boolean),
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

  return {
    props: {
      recipes,
      currentPage,
      pageCount,
    },
  };
}
