<template>
  <div>
    <the-header
      title="Personal Diary"
      description="this is my diary"
      :showNav="false"
    ></the-header>
    <input-form></input-form>
    <card-list :items="items"></card-list>
  </div>
</template>

<script>
import TheHeader from './components/ui/TheHeader.vue';
import InputForm from './components/InputForm.vue';
import CardList from './components/CardList.vue';
import ItemsApi from './api/itemsApi';
export default {
  name: 'App',
  components: {
    TheHeader,
    InputForm,
    CardList,
  },
  created() {
    ItemsApi.fetchAllItems().then((all) => (this.items = all));
  },
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
