<template>
  <div>
    <label>{{ data.label }}</label>
    <div>
      <select v-bind:name="data.id">
        <option v-for="option in data.options" value="option.value">
          {{ option.label }}
        </option>
      </select>
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
