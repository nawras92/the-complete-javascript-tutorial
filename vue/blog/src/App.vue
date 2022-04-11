<template>
  <blog-button title="Go there" background="crimson" color="#fff" />
  <blog-button title="Go there" link="/blog" fullWidth />
</template>

<script>
import BlogButton from './components/BlogButton.vue';
export default {
  name: 'App',
  components: {
    BlogButton,
  },
};
</script>

<style></style>
