<template>
  <form class="form">
    <div class="form-control">
      <label class="form-label" for="text">Text: </label>
      <textarea
        id="text"
        class="form-textarea"
        name="text"
        cols="30"
        rows="10"
        v-model="text"
      ></textarea>
    </div>
    <div class="form-control">
      <label class="form-label" for="background">Color: </label>
      <input
        id="background"
        name="background"
        v-model="background"
        class="form-input"
        type="color"
      />
    </div>
    <div class="form-control">
      <the-button
        @click="addItem"
        background="crimson"
        color="white"
        title="add item"
      />
      <the-button
        @click="editItem"
        background="blue"
        color="white"
        title="edit item"
      />
    </div>

    {{ getCurrentItem }}
  </form>
</template>

<script>
import TheButton from './ui/TheButton.vue';

export default {
  components: {
    TheButton,
  },
  created() {
    this.text = this.getText;
    this.background = this.getBackground;
  },
  data() {
    return {
      text: '',
      background: '#ffffff',
    };
  },
  computed: {
    getCurrentItem() {
      return this.$store.getters.getCurrentItem;
    },
    getText() {
      return this.$store.getters.getCurrentItem.text;
    },
    getBackground() {
      return this.$store.getters.getCurrentItem.background;
    },
  },
  methods: {
    addItem() {
      const newItem = {
        text: this.text,
        background: this.background,
      };
      this.$store.dispatch('addItem', newItem);
    },
    editItem() {
      const newItem = {
        text: this.text,
        background: this.background,
      };
      this.$store.dispatch('editItem', {
        oldItem: this.$store.getters.getCurrentItem,
        newItem,
      });
    },
  },
};
</script>

<style scoped>
.form {
  margin: 1rem auto;
  padding: 1rem;
  max-width: 70%;
  border-radius: 50px;
  background: linear-gradient(30deg, lightblue, #eee);
  text-align: center;
}

.form-control {
  margin: 1rem;
}

.form-label {
  font-size: 1.4rem;
  font-weight: bold;
}

.form-textarea {
  width: 100%;
  display: block;
  font-size: 1.2rem;
  color: darkgreen;
}
</style>
