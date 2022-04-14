<template>
  <div class="controls">
    <div class="control">
      <input
        :checked="rules.reverse"
        @change="changeOrder"
        type="checkbox"
        id="reverse"
        name="reverse"
      />
      <label class="control-label" for="reverse">Reverse</label>
    </div>
    <div class="control">
      <input
        :checked="rules.byId"
        @change="changeOrder"
        type="checkbox"
        id="byId"
        name="byId"
      />
      <label class="control-label" for="byId">by Id</label>
    </div>
    <div class="control">
      <input
        :checked="rules.byName"
        @change="changeOrder"
        type="checkbox"
        id="byName"
        name="byName"
      />
      <label class="control-label" for="byName">By Name</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rules: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  methods: {
    changeOrder($event) {
      this.$emit('changeOrder', {
        name: $event.target.name,
        checked: $event.target.checked,
      });
    },
  },
};
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-around;
}

.control-label {
  display: block-inline;
  margin: 0 0.5rem;
}
</style>
