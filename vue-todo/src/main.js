// import Vue from 'vue' // vue2
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js'

createApp(App).use(store).mount('#app')

// vue2
/* new Vue({
  el: '#app',
  store, // == store : store
  render: h => h(App)
}) */
