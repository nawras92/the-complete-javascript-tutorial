<template>
  <table class="table">
    <tr class="table-headRow">
      <th class="table-headCell">Id</th>
      <th class="table-headCell">Name</th>
      <th class="table-headCell">URL</th>
      <th class="table-headCell">Delete</th>
    </tr>

    <tr class="table-row" v-for="video in videos" :key="video.url">
      <td class="table-cell">#{{ video.id }}</td>
      <td class="table-cell">{{ video.name }}</td>
      <td class="table-cell">{{ video.url }}</td>
      <td class="table-cell" @click="deleteVideo(video)">X</td>
    </tr>
  </table>
</template>

<script>
export default {
  emits: ['deleteVideo'],
  props: {
    videos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteVideo(video) {
      console.log(this.videos);
      this.$emit('deleteVideo', video);
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: separate;
}

.table-headRow,
.table-row {
  text-align: left;
}

.table-headRow {
  background: #e5e5e5;
}

.table-headCell,
.table-cell {
  padding: 0.4rem;
}

.table-cell:last-child {
  color: tomato;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
}
</style>
