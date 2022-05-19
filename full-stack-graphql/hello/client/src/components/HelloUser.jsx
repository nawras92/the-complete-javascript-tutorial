import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
  query helloFromReact($username: String!) {
    helloWithName(name: $username)
  }
`;
function HelloUser(props) {
  const { name } = props;

  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      username: name,
    },
  });
  return (
    <div>
      {error && <p> Error: {error.message} </p>}
      {loading && <p> Query is loading ... </p>}
      {data && <h1> data from server: {data.helloWithName}</h1>}
    </div>
  );
}

export default HelloUser;
