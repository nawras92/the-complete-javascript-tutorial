<template>
  <website-page title="our blog" description="check our posts">
    <template v-slot:content>
      <div class="posts">
        <blog-post
          v-for="post in posts"
          :title="post.title"
          :description="post.description"
          :id="post.id"
          :key="post.id"
        ></blog-post>
      </div>
    </template>
  </website-page>
</template>

<script>
import WebsitePage from '../components/WebsitePage.vue';
import BlogPost from '../components/BlogPost.vue';
export default {
  components: {
    WebsitePage,
    BlogPost,
  },
  inject: ['posts'],
};
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 1000px) {
  .posts {
    display: block;
  }
}
</style>
