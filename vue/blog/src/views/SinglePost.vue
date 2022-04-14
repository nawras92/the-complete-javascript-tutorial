<template>
  <website-page :title="post.title" :description="post.description">
    <template v-slot:content>
      <card-item background="linear-gradient(30deg, lightblue, #e5e5e5)">
        <template v-slot:content>
          <p>{{ post.content }}</p></template
        >
      </card-item>
    </template>
  </website-page>
</template>

<script>
import WebsitePage from '../components/WebsitePage.vue';
import BlogButton from '../components/BlogButton.vue';
import CardItem from '../components/CardItem.vue';
export default {
  components: {
    WebsitePage,
    CardItem,
    BlogButton,
  },
  inject: ['posts'],

  data() {
    return {
      post: this.getPost(this.$route.params.id),
    };
  },
  methods: {
    getPost(id) {
      const post = this.posts.find((p) => p.id === id);
      return (
        post || {
          id: 0,
          title: 'no post',
          content: 'no content',
          description: 'no description',
        }
      );
    },
  },
};
</script>
