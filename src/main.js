import Vue from 'vue'
import App from './App'
import Store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  store: Store,
  components: { App }
})
