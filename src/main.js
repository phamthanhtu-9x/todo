import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta';
import VueMoment from 'vue-moment'
import VuePaginate from 'vue-paginate';
import * as VeeValidate from 'vee-validate';
import vuetify from '@/plugins/vuetify'



Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_API_ROOT;

Vue.use(VueAxios, axios, VueMeta, VueMoment, VuePaginate, VeeValidate)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
