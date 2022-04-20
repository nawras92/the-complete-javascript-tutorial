<template>
  <website-page title="Home Page" description="this is our home page">
    <template v-slot:content>
      <card-item showHeader showActions showMedia>
        <template v-slot:media>
          <img src="https://picsum.photos/id/56/300/200" alt="pic" />
        </template>
        <template v-slot:header>
          <p>New Offer</p>
        </template>
        <template v-slot:content>
          <p>Here is your offer, click to get it</p>
        </template>
        <template v-slot:actions>
          <blog-button
            title="check offer 1"
            background="crimson"
            color="#fff"
          />
          <blog-button title="check offer 2" background="lightgreen" />
        </template>
      </card-item>

      <card-item
        showHeader
        background="linear-gradient(30deg, #eee, slateblue)"
      >
        <template v-slot:header>
          <p>who are we?</p>
        </template>
        <template v-slot:content>
          <p>
            Elit praesentium magnam corporis delectus numquam labore Obcaecati
            fugit nemo voluptatum enim quidem sint quasi error? Itaque ducimus
            quo ducimus blanditiis asperiores Voluptatum laboriosam saepe magnam
            distinctio amet? Repudiandae aspernatur iure corrupti est vero
            Laboriosam eaque ut sint tempora sint?
          </p>
        </template>
      </card-item>

      <card-item
        background="linear-gradient(30deg, #eee, crimson)"
        showHeader
        showActions
        :showContent="false"
      >
        <template v-slot:header>
          <p>wanna pick the offer?</p>
        </template>
        <template v-slot:actions>
          <blog-button
            title="yes take me now"
            background="cornsilk"
            fullWidth
          />
        </template>
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
