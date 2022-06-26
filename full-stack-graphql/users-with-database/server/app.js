const PORT = 4000;
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');
const users = require('./usersData');

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      users,
    },
  });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`The express app runs on port ${PORT}`);
    console.log(`The Apollo Server runs on port ${PORT}${server.graphqlPath}`);
  });
}

startServer();
