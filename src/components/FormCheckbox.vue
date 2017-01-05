<template>
  <div>
    <label>{{ data.label }}</label>
    <div v-for="option in data.options" v-if="!data.multiple">
      <input type="radio" v-bind:name="data.id" v-model="value">
      {{ option.label }}
    </div>
    <div v-for="option in data.options" v-if="data.multiple">
      <input type="checkbox" v-bind:name="option.label" v-model="values[option.id]">
      {{ option.label }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const values = {};
    this.data.options.map(v => (values[v.id] = false));
    console.log(values);
    return { values };
  },
  props: ['data'],
  watch: {
    values: {
      handler(val) {
        console.log(val);
        this.$emit('change', { id: this.data.id, value: this.values });
      },
      deep: true,
    },
  },
};
</script>

<style scoped>

</style>
