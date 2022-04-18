<template>
  <div class="card" :style="{ background: background }">
    <div v-show="showMedia" class="card-media">
      <slot name="media"></slot>
    </div>

    <div class="card-details">
      <div v-show="showHeader" class="card-header">
        <slot name="header"></slot>
      </div>
      <div v-show="showContent" class="card-content">
        <slot name="content"> </slot>
      </div>
      <div v-show="showActions" class="card-actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default() {
        return '#fff';
      },
    },
    showMedia: Boolean,
    showHeader: Boolean,
    showActions: Boolean,
    showContent: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
};
</script>
<style scoped>
.card {
  background: lightblue;
  border: 2px solid #eee;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  margin: 1rem auto;
  box-shadow: 1px 1px 10px 2px #eee;
}

.card:hover {
  cursor: crosshair;
  box-shadow: 1px 1px 10px 10px #eee;
}

.card-details {
  margin: 0 1rem;
}

.card-header {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card-content {
  font-size: 1.3rem;
  margin: 1rem auto;
}
</style>
