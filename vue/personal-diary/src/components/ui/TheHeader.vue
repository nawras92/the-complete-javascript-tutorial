<template>
  <header class="header">
    <div class="header-logo">
      <h1 class="header-heading">{{ title }}</h1>
      <p class="header-text">{{ description }}</p>
      {{ getMessage }}
    </div>
    <nav class="nav header-nav" v-show="showNav">
      <a to="/" class="nav-link">Home</a>
      <a to="/blog" class="nav-link">Blog</a>
      <a to="/about" class="nav-link">About</a>
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
    showNav: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  computed: {
    getMessage() {
      return this.$store.state.message;
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
