<template>
  <form class="form" @submit.prevent="submit">
    <form-input
      :value="username.value"
      :error="username.error"
      :rules="username.rules"
      type="text"
      name="Username"
      @updateValue="update"
    />
    <form-input
      :value="password.value"
      :error="password.error"
      :rules="password.rules"
      type="password"
      name="Password"
      @updateValue="update"
    />
    <form-button text="Login Now" :disabled="!isValid" />
  </form>
</template>

<script>
import FormInput from './components/FormInput.vue';
import FormButton from './components/FormButton.vue';
export default {
  name: 'App',
  components: {
    FormInput,
    FormButton,
  },
  data() {
    return {
      username: {
        value: 'u',
        rules: {
          required: true,
          min: 4,
        },
        error: '',
      },
      password: {
        value: '123',
        rules: {
          required: true,
          min: 8,
        },
        error: '',
      },
    };
  },
  methods: {
    update({ name, value, error }) {
      this[name].error = error;
      this[name].value = value;
    },
    submit() {
      console.log({
        username: this.username.value,
        password: this.password.value,
      });
    },
  },
  computed: {
    isValid() {
      return !this.username.error && !this.password.error;
    },
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  background: linear-gradient(80deg, #e5e5e5, lightblue);
  padding: 2rem;
  border-radius: 10px;
}
</style>
