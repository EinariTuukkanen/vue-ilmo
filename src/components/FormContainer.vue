<template>
  <div class="form-container">
    <div v-for="item in form.items">
      <form-input v-on:change="inputChange" v-if="item.type === 'input'" v-bind:data="item" />
      <form-dropdown v-if="item.type === 'dropdown'" v-bind:data="item" />
      <form-checkbox v-if="item.type === 'checkbox'" v-bind:data="item" />
      <br />
    </div>
  </div>
</template>

<script>
import FormInput from './FormInput';
import FormDropdown from './FormDropdown';
import FormCheckbox from './FormCheckbox';

export default {
  name: 'form-container',
  components: {
    FormInput,
    FormDropdown,
    FormCheckbox,
  },
  data() {
    return {
      form: {
        items: [
          { id: 'name', type: 'input', label: 'Name' },
          { id: 'asd', type: 'input', label: 'MOI' },
          { id: 'email', type: 'input', label: 'Email' },
          {
            id: 'status',
            type: 'dropdown',
            label: 'Status',
            options: [
              { label: 'Student', value: 'student' },
              { label: 'gay', value: 'lol' },
              { label: 'Supporter', value: 'supporter' },
            ],
          },
          {
            id: 'extra',
            type: 'checkbox',
            label: 'Extra order',
            options: [
              { label: 'Yes', value: 'true' },
              { label: 'No', value: 'false' },
            ],
          },
        ],
      },
    };
  },
  methods: {
    inputChange(event) {
      console.log(event);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
