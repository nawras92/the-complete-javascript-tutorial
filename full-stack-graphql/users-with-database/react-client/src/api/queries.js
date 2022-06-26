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
  getUser: gql`
    query getUserFunc($userID: ID!) {
      getUser(id: $userID) {
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
