import { gql } from '@apollo/client';

const queries = {
  getUsers: gql`
    query {
      getAllUsers {
        id
        firstName
        username
        favNumber
        isActive
      }
    }
  `,
};

export default queries;
