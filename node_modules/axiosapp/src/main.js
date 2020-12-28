import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Vuetify from 'vuetify'


Vue.use(Vuetify);
Vue.use(VueAxios, axios);


import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
