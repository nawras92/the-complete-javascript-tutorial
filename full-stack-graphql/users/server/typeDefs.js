const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    doesItWork: Boolean!
    getAllUsers: [User!]!
    getUser(id: ID!): User!
  }
  type User {
    id: ID!
    firstName: String!
    username: String!
    favNumber: Int!
    isActive: Boolean!
  }
`;
