import Vue from 'vue';
import Vuex from 'vuex';
import productsStore from './products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: productsStore,
  },
});
