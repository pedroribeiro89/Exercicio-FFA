import Vue from "vue";
import Vuex from "vuex";
import {ADD_PRODUCT_ACTION} from "./actions.types";
import {ADD_PRODUCT_MUTATION} from "./mutations.types";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        productList: [
            {id: 1, name: 'Iphone', price: '1000.00 USD'},
            {id: 2, name: 'MacBook', price: '10000.00 USD'},
            {id: 3, name: 'Motorola', price: '500.00 USD'},
            {id: 4, name: 'PC do Milhão', price: '5.00 USD'},
        ],
        id: 4
    },
    mutations: {
      [ADD_PRODUCT_MUTATION](state, product) {
          state.id += 1;
          product.id = state.id;
          state.productList.push(product);
      }
    },
    actions: {
        [ADD_PRODUCT_ACTION]({ commit }, product) {
            commit(ADD_PRODUCT_MUTATION, product);
            //Actions can have async code
        }
    }
});
