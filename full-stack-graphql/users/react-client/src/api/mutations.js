import { gql } from '@apollo/client';

const mutations = {
  removeUser: gql`
    mutation removeUserFunc($userID: ID!) {
      removeUser(id: $userID)
    }
  `,
  addUser: gql`
    mutation addUserFunc(
      $userID: ID!
      $firstName: String!
      $username: String!
      $favNumber: Int!
      $isActive: Boolean!
    ) {
      addUser(
        id: $userID
        firstName: $firstName
        username: $username
        favNumber: $favNumber
        isActive: $isActive
      )
    }
  `,
};

export default mutations;
