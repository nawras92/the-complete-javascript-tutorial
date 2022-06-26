const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    doesItWork: Boolean!
    getAllUsers: [User!]!
    getUser(id: ID!): User!
  }
  type Mutation {
    addUser(
      firstName: String!
      username: String!
      favNumber: Int!
      isActive: Boolean!
    ): Boolean!
    removeUser(id: ID!): Boolean!
    editUser(
      id: ID!
      firstName: String
      username: String
      favNumber: Int
      isActive: Boolean
    ): User!
  }
  type User {
    id: ID!
    firstName: String!
    username: String!
    favNumber: Int!
    isActive: Boolean!
  }
`;
