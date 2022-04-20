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
import { ref, reactive, computed } from 'vue';
import FormInput from './components/FormInput.vue';
import FormButton from './components/FormButton.vue';
export default {
  name: 'App',
  components: {
    FormInput,
    FormButton,
  },
  setup() {
    const username = reactive({
      value: 'u',
      rules: {
        required: true,
        min: 4,
      },
      error: '',
    });
    const password = reactive({
      value: '123',
      rules: {
        required: true,
        min: 8,
      },
      error: '',
    });

    const isValid = computed(() => {
      return !username.error && !password.error;
    });

    // Methods
    // Update
    function update({ name, value, error }) {
      if (name === 'username') {
        username.error = error;
        username.value = value;
      }
      if (name === 'password') {
        password.error = error;
        password.value = value;
      }
    }
    //submit
    function submit() {
      console.log({
        username: username.value,
        password: password.value,
      });
    }
    return {
      username,
      password,
      update,
      isValid,
      submit,
    };
  },
  /* data() { */
  /*   return { */
  /*     username: { */
  /*       value: 'u', */
  /*       rules: { */
  /*         required: true, */
  /*         min: 4, */
  /*       }, */
  /*       error: '', */
  /*     }, */
  /*     password: { */
  /*       value: '123', */
  /*       rules: { */
  /*         required: true, */
  /*         min: 8, */
  /*       }, */
  /*       error: '', */
  /*     }, */
  /*   }; */
  /* }, */
  /* methods: { */
  /*   update({ name, value, error }) { */
  /*     this[name].error = error; */
  /*     this[name].value = value; */
  /*   }, */
  /*   submit() { */
  /*     console.log({ */
  /*       username: this.username.value, */
  /*       password: this.password.value, */
  /*     }); */
  /*   }, */
  /* }, */
  /* computed: { */
  /*   isValid() { */
  /*     return !this.username.error && !this.password.error; */
  /*   }, */
  /* }, */
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
