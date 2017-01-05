<template>
  <div>
    <label>{{ data.label }}</label>
    <input type="text" v-bind:name="data.id" v-model="value">
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
