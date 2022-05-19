import { createApp } from 'vue';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createApolloProvider } from '@vue/apollo-option';
import App from './App.vue';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

createApp(App).use(apolloProvider).mount('#app');
