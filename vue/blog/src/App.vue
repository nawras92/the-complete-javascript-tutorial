<template>
  <website-header title="simple blog" description="my beautiful blog" />
</template>

<script>
import WebsiteHeader from './components/WebsiteHeader.vue';
export default {
  name: 'App',
  components: {
    WebsiteHeader,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
