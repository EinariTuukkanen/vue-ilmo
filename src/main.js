// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueRouter from 'vue-router';
import Vue from 'vue';
import HomeContainer from './HomeContainer';
import FormContainer from './FormContainer';

Vue.use(VueRouter);
Vue.component('home-container', HomeContainer);
Vue.component('form-container', FormContainer);

const HomeComponent = { template: '<home-container />' };
const FormComponent = { template: '<form-container />' };

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/form/:id', component: FormComponent },
  ],
  components: { HomeContainer, FormContainer },
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: `
    <div id="app">
      <router-link to="/">Home</router-link>
      <router-view></router-view>
    </div>
  `,
  // template: '<HomeContainer />',
  components: { HomeContainer, FormContainer },
});

