const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    hello: String
    getBooks: [Book]
    getBook(id: ID!): Book
  }

  type Book {
    id: ID!
    title: String!
    description: String
    authorId: String
  }

  type Mutation {
    addBook(
      id: ID!
      title: String!
      description: String
      authorId: String
    ): Boolean!

    deleteBook(id: ID!): Boolean!

    editBook(
      id: ID!
      title: String
      description: String
      authorId: String
    ): Boolean!
  }
`;
