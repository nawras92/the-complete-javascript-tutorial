<template>
  <form class="form">
    <div class="form-control">
      <label class="form-label" for="">Text: </label>
      <textarea
        id=""
        class="form-textarea"
        name=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="form-control">
      <label class="form-label" for="">Color: </label>
      <input class="form-input" type="color" />
    </div>
    <div class="form-control">
      <the-button background="crimson" color="white" title="add item" />
      <the-button background="blue" color="white" title="edit item" />
    </div>
  </form>
</template>

<script>
import TheButton from './ui/TheButton.vue';

export default {
  components: {
    TheButton,
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
