<template>
  <card-item :showMedia="true" :showHeader="true" :showActions="true">
    <template v-slot:media>
      <h1>this is an image</h1>
    </template>

    <template v-slot:header>
      <a href="/blog"> this is link</a>
    </template>

    <template v-slot:content>
      <p>
        Dolor minima eligendi lorem voluptatem exercitationem? Itaque quae vitae
        suscipit soluta tenetur eligendi Laudantium perferendis consequatur a
        pariatur sed. Error ratione nulla eveniet id error Quos delectus
        voluptatem consequatur porro5
      </p>
    </template>
  </card-item>
  <card-item :showMedia="true" :showHeader="true" :showActions="true">
    <template v-slot:media>
      <p>this is an image</p>
    </template>
    <template v-slot:header>
      <hr />
    </template>
    <template v-slot:content>
      <h5>this is content</h5>
    </template>
    <template v-slot:actions>
      <button>click me</button>
      <blog-button></blog-button>
    </template>
  </card-item>
</template>

<script>
import CardItem from './components/CardItem.vue';
import BlogButton from './components/BlogButton.vue';
export default {
  name: 'App',
  components: {
    CardItem,
    BlogButton,
  },
};
</script>

<style></style>
