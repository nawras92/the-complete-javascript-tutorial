<template>
  <div class="form-labels">
    <label class="form-label" :for="name">{{ name }}</label>
    <div class="form-error">{{ error }}</div>
  </div>
  <input
    :value="value"
    @input="input"
    class="form-input"
    :type="type"
    :id="name"
  />
</template>

<script>
export default {
  emits: ['updateValue'],
  props: {
    value: {
      type: String,
      required: true,
    },
    error: {
      type: String,
    },
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
  created() {
    this.$emit('updateValue', {
      name: this.name.toLowerCase(),
      value: this.value,
      error: this.validate(this.value),
    });
  },
  methods: {
    input($event) {
      this.$emit('updateValue', {
        name: this.name.toLowerCase(),
        value: $event.target.value,
        error: this.validate($event.target.value),
      });
    },
    validate(value) {
      if (this.rules.required && value.length === 0) {
        return 'Required';
      }
      if (this.rules.min && value.length < this.rules.min) {
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
