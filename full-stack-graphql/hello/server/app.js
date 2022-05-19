const PORT = 4000;
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String!
    helloWithName(name: String!): String!
  }
`;
const resolvers = {
  Query: {
    hello: () => 'hello from server 2',
    helloWithName: (parent, args) => {
      const { name } = args;
      return `Hello ${name} from server`;
    },
  },
};

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`This express app works on port ${PORT}`);
    console.log(`This apollo app works on port ${PORT}${server.graphqlPath}`);
  });
}

startServer();
