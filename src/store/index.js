import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: ""
  },
  mutations: {
    updateUserToken(state,token) {
      state.userToken = token;
    }
  },
  actions: {
    auth(context, token) {
      context.commit('updateUserToken', token);
    }
  },
  modules: {
    post
  }
})
