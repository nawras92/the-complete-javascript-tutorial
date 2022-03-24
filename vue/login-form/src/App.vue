<template>
  <form class="form">
    <form-input :rules="username.rules" type="text" name="Username" />
    <form-input :rules="password.rules" type="password" name="Password" />
    <form-button text="Login Now" :disabled="false" />
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
        rules: {
          required: true,
          min: 4,
        },
      },
      password: {
        rules: {
          required: true,
          min: 8,
        },
      },
    };
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
