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
`;
