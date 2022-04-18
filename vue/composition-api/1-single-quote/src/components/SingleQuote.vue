<template>
  <div class="quote">
    <p class="quote-text">{{ text }}</p>
    {{ textEdited }}
  </div>
</template>

<script>
export default {
  name: 'SingleQuote',
  props: ['text'],
  setup(props) {
    return {
      textEdited: props.text + ' edited',
    };
  },
};
</script>

<style scoped>
.quote {
  background: linear-gradient(30deg, #4bc0c8, #c7779d, #feac5e);
  color: #333;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem auto;
}

.quote-text {
  font-size: 1rem;
  font-weight: bold;
}
</style>
