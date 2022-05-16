import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
  query {
    hello
  }
`;
function Hello() {
  const { loading, error, data } = useQuery(QUERY);
  return (
    <div>
      {error && <p> Error: {error} </p>}
      {loading && <p> Query is loading ... </p>}
      {data && <h1> data from server: {data.hello}</h1>}
    </div>
  );
}

export default Hello;
