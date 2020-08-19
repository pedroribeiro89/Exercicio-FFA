import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { store } from './store'
import VueRouter from 'vue-router'
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
      { path: "/", component: Home },
      { path: "/product/:id", component: ProductDetail }
  ]
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
