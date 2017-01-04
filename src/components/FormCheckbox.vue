<template>
  <div>
    <label>{{ data.label }}</label>
    <div v-for="option in data.options">
      <input type="radio" v-bind:name="data.id" value="option.value">
      {{ option.label }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style scoped>

</style>
