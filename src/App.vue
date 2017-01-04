<template>
  <div id="app">
    <img src="./assets/logo.png">
    <form-container></form-container>
  </div>
</template>

<script>
import FormContainer from './components/FormContainer';

export default {
  name: 'app',
  components: {
    FormContainer,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
