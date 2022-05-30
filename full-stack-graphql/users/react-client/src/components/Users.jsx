import { useQuery } from '@apollo/client';
// import {gql} from '@apollo/client'
import User from './User';
import queries from '../api/queries';

// const getUsers = gql` query {
//     getAllUsers {
//       id
//       firstName
//       username
//       favNumber
//       isActive
//     }
//   }
// `;

const Users = () => {
  const { getUsers } = queries;
  const { loading, error, data } = useQuery(getUsers);
  return (
    <div>
      <h1>Welcome to Users</h1>
      {loading && <p> Loading Users ...</p>}
      {error && <p>Error: {error.message} </p>}
      {data &&
        data.getAllUsers &&
        data.getAllUsers.map((user, index) => {
          return <User key={index} {...user} />;
        })}
    </div>
  );
};

export default Users;
