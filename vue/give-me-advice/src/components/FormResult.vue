<template>
  <div class="result-box">
    <p class="result-title">Here is your advice</p>
    <p class="result-text" :style="{ color: color }">{{ advice }}</p>
  </div>
</template>

<script>
export default {
  name: 'FormResult',
  props: ['advice', 'color'],
};
</script>

<style scoped>
.result-box {
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(80deg, #e5e5e5, lightblue);
  border-radius: 10px;
}

.result-title {
  background: linear-gradient(80deg, yellow, lightgreen);
  padding: 2rem;
  border-radius: 10px;
  font-weight: bold;
  font-size: 2rem;
}

.result-text {
  font-size: 2rem;
  line-height: 3rem;
}
</style>
