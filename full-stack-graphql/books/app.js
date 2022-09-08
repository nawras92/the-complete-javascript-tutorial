const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const booksData = require('./booksData');

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      books: booksData,
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`The express app runs on port 4000`);
    console.log(`The Apollo Server  runs on port 4000/graphql`);
  });
}

startServer();
