<template>
  <div>
    <label>{{ data.label }}</label>
    <div>
      <select v-bind:name="data.id" v-model="value">
        <option v-for="option in data.options" v-bind:value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  props: ['data'],
  watch: {
    value(val) {
      this.$emit('change', { id: this.data.id, value: val });
    },
  },
};
</script>

<style scoped>

</style>
