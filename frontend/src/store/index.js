// src/store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: !!localStorage.getItem('token')
  },
  mutations: {
    setLogin(state, value) {
      state.isLoggedIn = value;
    }
  },
  actions: {
    login({ commit }) {
      commit('setLogin', true);
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      commit('setLogin', false);
    }
  }
})
