import Vue from 'vue'
import App from './App.vue'
import Track from './components/Track.vue'

Vue.component('trackOn', Track)

new Vue({
  el: '#app',
  render: h => h(App)
})
