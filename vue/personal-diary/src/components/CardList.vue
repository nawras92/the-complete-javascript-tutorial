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
        <the-button
          @click="deleteItem(item)"
          background="tomato"
          color="white"
          title="Delete"
        />
        <the-button
          @click="changeCurrentItem(item)"
          background="darkBlue"
          color="white"
          title="edit"
        />
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
  methods: {
    deleteItem(item) {
      this.$store.dispatch('deleteItem', item);
    },
    changeCurrentItem(item) {
      this.$store.dispatch('updateCurrentItem', item);
      this.$emit('editButtonClicked', true);
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
