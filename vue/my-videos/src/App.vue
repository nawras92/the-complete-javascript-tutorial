<template>
  <videos-form @addVideo="addVideo"></videos-form>
  <page-section title="My Videos">
    <template v-slot:content>
      <videos-table @deleteVideo="deleteVideo" :videos="videos"></videos-table>
    </template>
    <template v-slot:controls>
      <videos-control></videos-control>
    </template>
  </page-section>
</template>

<script>
import VideosForm from './components/VideosForm.vue';
import VideosTable from './components/VideosTable.vue';
import VideosControl from './components/VideosControl.vue';
import PageSection from './components/PageSection.vue';
export default {
  name: 'App',
  components: {
    VideosForm,
    VideosTable,
    PageSection,
    VideosControl,
  },
  data() {
    return {
      videos: [
        { name: 'Learn Vue', url: 'http://vuejs.com' },
        { name: 'Learn Python', url: 'http://Python.com' },
        { name: 'funny video', url: 'http://funny.com' },
        { name: 'nice song', url: 'http://songs.com' },
      ],
    };
  },
  methods: {
    addVideo(payload) {
      const { name, url } = payload;
      this.videos.push({
        name: name,
        url: url,
      });
    },
    deleteVideo(video) {
      console.log(video);
      this.videos = this.videos.filter(
        (v) => v.name !== video.name && v.url !== video.url
      );
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
