<template>
  <page-header title="My quotes" text="welcome to our website"></page-header>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
export default {
  name: 'App',
  components: {
    PageHeader,
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
</style>
