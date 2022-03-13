<template>
  <page-header title="My quotes" text="welcome to our website"></page-header>
  <div class="quotes">
    <single-quote
      v-for="quote in quotes"
      :text="quote.quoteText"
    ></single-quote>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import SingleQuote from './components/SingleQuote.vue';
import quotes from '../quotes.json';
console.log(quotes);
export default {
  name: 'App',
  components: {
    PageHeader,
    SingleQuote,
  },
  data() {
    return {
      quotes,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-bottom: 1rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.quotes {
  max-width: 80%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
</style>
