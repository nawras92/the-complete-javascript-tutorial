<template>
  <form class="form">
    <div class="form-group">
      <label class="form-label" for="url">Video Url: </label>
      <input v-model="videoUrl" class="form-input" type="url" id="url" />
    </div>

    <div class="form-group">
      <label class="form-label" for="name">Video name: </label>
      <input v-model="videoName" class="form-input" type="text" id="name" />
    </div>
    <button @click="addVideo" class="form-button">Add Video</button>
  </form>
</template>

<script>
import { ref } from 'vue';
export default {
  setup(props, { emit }) {
    const videoUrl = ref('');
    const videoName = ref('');

    function addVideo(event) {
      event.preventDefault();
      emit('addVideo', {
        url: videoUrl.value,
        name: videoName.value,
      });
    }

    return {
      videoUrl,
      videoName,
      addVideo,
    };
  },
  /* data() { */
  /*   return { */
  /*     videoUrl: '', */
  /*     videoName: '', */
  /*   }; */
  /* }, */
  /* methods: { */
  /*   addVideo($event) { */
  /*     $event.preventDefault(); */
  /*     this.$emit('addVideo', { */
  /*       url: this.videoUrl, */
  /*       name: this.videoName, */
  /*     }); */
  /*   }, */
  /* }, */
};
</script>

<style scoped>
.form {
  background: linear-gradient(80deg, lightblue, lightgreen);
  padding: 1rem;
  text-align: center;
}

.form-input {
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid yellow;
  font-size: 1.2rem;
  font-weight: bold;
}

.form-label {
  font-size: 1.1rem;
  font-weight: bold;
}

.form-button {
  background: yellow;
  padding: 0.4rem 0.6rem;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1.1rem;
}

.form-button:hover {
  cursor: pointer;
  filter: brightness(70%);
}

.form-group {
  margin: 1rem 0;
}
</style>
