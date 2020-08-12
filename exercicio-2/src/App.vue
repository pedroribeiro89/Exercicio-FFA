<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <ProductForm :submitedForm="addProduct"></ProductForm>
    <ProductsList :list="productList"></ProductsList>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ProductsList from './components/ProductsList.vue'
import ProductForm from "./components/ProductForm";

export default {
  name: 'App',
  components: {
    ProductForm,
    // HelloWorld
    ProductsList
  },
  data() {
    return {
      productList: [
        {id: 1, name: 'Iphone', price: '1000.00 USD'},
        {id: 2, name: 'MacBook', price: '10000.00 USD'},
        {id: 3, name: 'Motorola', price: '500.00 USD'},
        {id: 4, name: 'PC do Milhão', price: '5.00 USD'},
      ]
    };
  },
  methods: {
    addProduct(product) {
      this.productList.push(product);
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
