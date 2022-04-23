<template>
  <div>
    <the-header
      title="Personal Diary"
      description="this is my diary"
      :showNav="false"
    ></the-header>
    <h1>{{ getMessage }}</h1>
    <button @click="changeMessage1">Change message 1</button>
    <button @click="changeMessage2">Change message 2</button>
    <button @click="changeMessage3">Change message 3</button>
    <input-form :key="newKey"></input-form>
    <card-list
      @editButtonClicked="newKey = Math.random()"
      :items="items"
    ></card-list>
  </div>
</template>

<script>
import TheHeader from './components/ui/TheHeader.vue';
import InputForm from './components/InputForm.vue';
import CardList from './components/CardList.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    InputForm,
    CardList,
  },
  created() {
    this.$store.dispatch('loadAllItems');
  },
  data() {
    return {
      newKey: 0,
    };
  },
  computed: {
    items() {
      return this.$store.getters.getItems;
    },
    getMessage() {
      return this.$store.state.message;
    },
  },
  methods: {
    changeMessage1() {
      this.$store.dispatch('setMessage', 'hello  1');
    },
    changeMessage2() {
      this.$store.dispatch('setMessage', 'hello  2');
    },
    changeMessage3() {
      this.$store.dispatch('setMessage', 'hello  3');
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
