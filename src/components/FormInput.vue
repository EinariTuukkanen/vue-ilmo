<template>
  <div>
    <label>{{ data.label }}</label>
    <input type="text" v-bind:name="data.id">
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style scoped>

</style>
