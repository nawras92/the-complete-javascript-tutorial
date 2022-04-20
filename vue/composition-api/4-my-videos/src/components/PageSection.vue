<template>
  <div class="section">
    <h2 class="section-title">
      <span>{{ title }}</span>
    </h2>
    <div class="section-controls">
      <slot name="controls"></slot>
    </div>

    <div class="section-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.section {
  width: 80%;
  margin: 1rem auto;
}

.section-title {
  margin-bottom: 1rem;
  text-align: center;
}

.section-title span {
  margin-bottom: 0.4rem;
  padding-bottom: 0.4rem;
  border-bottom: 5px solid lightblue;
}

.section-controls {
  background: palegoldenrod;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 10px;
}
</style>
