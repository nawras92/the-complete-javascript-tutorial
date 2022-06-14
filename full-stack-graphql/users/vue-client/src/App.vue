<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>welcome to dashboard</h1>
    <nav>
      <router-link to="/">Home |</router-link>
      <router-link to="/users">Users |</router-link>
      <router-link to="/add-user">Add User |</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<script>
import Users from './components/Users';
export default {
  name: 'App',
  components: {
    Users,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
