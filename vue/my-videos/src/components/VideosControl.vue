<template>
  <div class="controls">
    <div class="control">
      <input type="checkbox" id="reverse" />
      <label class="control-label" for="reverse">Reverse</label>
    </div>
    <div class="control">
      <input type="checkbox" id="byId" />
      <label class="control-label" for="byId">by Id</label>
    </div>
    <div class="control">
      <input type="checkbox" id="byName" />
      <label class="control-label" for="byName">By Name</label>
    </div>
  </div>
</template>

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
