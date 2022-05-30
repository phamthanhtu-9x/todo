import api from '../../api/index.js'

const state = {
  posts: [],
}

const getters = {
  posts: state => state.posts
}

const actions = {
  async getPost ({ commit }) {
    const data = await api.GetPost();
    commit('SET_POST', data);
  },
}

const mutations = {
  SET_POST (state, posts) {
    state.posts = posts
  },
  ADD_POST (state, post) {
    state.posts.push(post);
  },
  UPDATE_POST (state, post) {
    let index = state.posts.findIndex(item => item.id == post.id);
    if (index > -1) {
      state.posts[index] = post
    }
  },
  DELETE_POST (state, idPost) {
    let index = state.posts.findIndex(item => item.id == idPost);
    if (index > -1) {
      state.posts.splice(index, 1);
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}