<template>
  <header class="header">
    <div class="header-logo">
      <h1 class="header-heading">{{ title }}</h1>
      <p class="header-text">{{ description }}</p>
    </div>
    <nav class="nav header-nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/blog" class="nav-link">Blog</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return 'website title';
      },
    },
    description: {
      type: String,
      default() {
        return 'website description';
      },
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background: #333;
  color: #fff;
}

.header-logo,
.header-nav {
  margin: 0.5rem;
}

.header-heading,
.header-text {
  display: inline;
}

.header-heading {
  font-size: 1.2rem;
}

.header-heading:after {
  content: ' - ';
}

.nav-link {
  text-decoration: none;
  color: #fff;
}

.nav-link:after {
  content: ' | ';
}

.nav-link:last-child:after {
  content: '';
}

.nav-link:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>
