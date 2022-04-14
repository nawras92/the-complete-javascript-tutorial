<template>
  <card-item showActions showHeader showMedia>
    <template v-slot:media>
      <img
        class="post-thumbnail"
        :src="`https://picsum.photos/id/${id}/400/300`"
        alt="thumbnail"
      />
    </template>
    <template v-slot:header>
      <h2 class="post-title">{{ title }}</h2>
    </template>
    <template v-slot:content>
      <p class="post-description">{{ description }}</p>
    </template>
    <template v-slot:actions>
      <blog-button title="Read more" background="#eee" fullWidth />
    </template>
  </card-item>
</template>

<script>
import BlogButton from '../components/BlogButton.vue';
import CardItem from '../components/CardItem.vue';
export default {
  components: {
    CardItem,
    BlogButton,
  },
  props: {
    id: String,
    title: String,
    description: String,
  },
};
</script>

<style scoped>
.post-title {
  display: inline-block;
  font-size: 1.8rem;
  background: linear-gradient(90deg, lightblue, #eee);
  padding: 1rem;
  border-radius: 10px;
}

.post-thumbnail {
  max-width: 100%;
  display: block;
}
@media screen and (max-width: 700px) {
  .post-thumbnail {
    display: none;
  }
}
</style>
