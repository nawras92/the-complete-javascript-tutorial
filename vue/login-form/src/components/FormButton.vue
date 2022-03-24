<template>
  <button class="button" :disabled="disabled">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style scoped>
.button {
  display: block;
  width: 100%;
  background: lightgreen;
  color: #000;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}

.button:hover {
  opacity: 0.7;
}

.button:disabled {
  opacity: 0.5;
}
</style>
