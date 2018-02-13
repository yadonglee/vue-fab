import App from './App.vue'
import Fab from '../src/index.js'
import Vue from 'vue'

Vue.use(Fab)

const app = new Vue({
  render: h => h(App)
}).$mount('#app')
