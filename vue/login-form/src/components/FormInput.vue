<template>
  <div class="form-labels">
    <label class="form-label" :for="name">{{ name }}</label>
    <div class="form-error">{{ error }}</div>
  </div>
  <input v-model="value" class="form-input" :type="type" :id="name" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default() {
        return 'text';
      },
    },
    rules: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      value: '',
    };
  },
  computed: {
    error() {
      if (this.rules.required && this.value.length === 0) {
        return 'Required';
      }
      if (this.rules.min && this.value.length < this.rules.min) {
        return `Min length is ${this.rules.min}`;
      }
    },
  },
};
</script>

<style scoped>
.form-labels {
  display: flex;
  justify-content: space-between;
}

.form-error {
  color: red;
}

.form-input {
  outline: none;
  border: none;
  background: white;
  color: #000;
  padding: 0.6rem;
  margin: 1rem 0;
  border-radius: 10px;
}
</style>
