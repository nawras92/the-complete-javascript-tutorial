<template>
  <page-header
    title="Give me advice"
    text="Provide a number and get a piece of advice"
  >
  </page-header>
  <page-form></page-form>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageForm from './components/PageForm.vue';
export default {
  name: 'App',
  components: {
    PageHeader,
    PageForm,
  },
};
</script>

<style>
@import './assets/css/style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
