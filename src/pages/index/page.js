import Vue from 'vue'
import App from './content.vue'
import router from './router'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  router,
  created () {
  },
  template: '<App/>'
})
