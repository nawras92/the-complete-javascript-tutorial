<template>
  <form class="form">
    <fieldset class="form-fieldset">
      <legend class="form-legend">Choose a number</legend>
      <label class="form-label">Luck Number</label>
      <input class="form-input" type="number" />
    </fieldset>
    <fieldset class="form-fieldset">
      <legend class="form-legend">Text Color</legend>
      <label class="form-label">Color</label>
      <input class="form-input" type="color" />
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'PageForm',
};
</script>

<style scoped>
.form {
  margin: 5rem auto;
  max-width: 70%;
}

.form-fieldset {
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 10px;
  background: linear-gradient(80deg, #e5e5e5, lightblue);
}

.form-legend {
  display: block;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  background: linear-gradient(80deg, yellow, lightgreen);
  border-radius: 10px;
}

.form-label {
  display: block;
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.form-input {
  outline: none;
  border: none;
  font-size: 2rem;
  color: tomato;
  text-align: center;
  max-width: 30%;
}
</style>
