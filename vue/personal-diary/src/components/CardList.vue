<template>
  <div class="cards">
    <the-card
      v-for="(item, index) in items"
      :key="index"
      :background="item.background"
      showActions
    >
      <template v-slot:content>{{ item.text }}</template>
      <template v-slot:actions>
        <the-button background="tomato" color="white" title="Delete" />
        <the-button background="darkBlue" color="white" title="edit" />
      </template>
    </the-card>
  </div>
</template>

<script>
import TheCard from '../components/ui/TheCard.vue';
import TheButton from '../components/ui/TheButton.vue';
export default {
  components: {
    TheCard,
    TheButton,
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.cards {
  max-width: 80%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

@media screen and (max-width: 700px) {
  .cards {
    display: block;
  }
}
</style>
