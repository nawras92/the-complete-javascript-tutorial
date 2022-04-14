<template>
  <website-page title="home" description="short desc">
    <template v-slot:content>
      <h1>page 1</h1>
    </template>
  </website-page>
  <website-page>
    <template v-slot:content>
      <h1>page 1</h1>
    </template>
  </website-page>
</template>

<script>
import WebsitePage from './components/WebsitePage.vue';
export default {
  name: 'App',
  components: {
    WebsitePage,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
