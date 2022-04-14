<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-heading">{{ title }}</h1>
      <p class="page-description">{{ description }}</p>
    </div>

    <div class="page-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return 'Page title';
      },
    },
    description: {
      type: String,
      default() {
        return 'Page description';
      },
    },
  },
};
</script>

<style scoped>
.page-header {
  background: #eee;
  padding: 1rem;
  text-align: center;
}

.page-content {
  width: 80%;
  margin: 2rem auto;
}
</style>
