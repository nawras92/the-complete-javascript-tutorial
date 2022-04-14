<template>
  <website-page title="single post" description="single post desc">
    <template v-slot:content>
      <card-item background="linear-gradient(30deg, lightblue, #e5e5e5)">
        <template v-slot:content>
          <p>
            Sit quasi error possimus quidem ab nesciunt Nemo ducimus animi
            provident voluptatibus similique Error officia odio dolor culpa
            eaque! Consectetur totam ad consequuntur rem incidunt Nostrum non
            ipsum eveniet doloremque explicabo Aliquid nam molestias fuga
            quisquam natus iste placeat pariatur veritatis tenetur, rerum Ut aut
            ipsam aperiam necessitatibus necessitatibus amet.
          </p></template
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
};
</script>
