import Vue from 'vue'
import App from '@/App.vue'
import EventBus from '@/plugins/event-bus'
import VueRouter from 'vue-router'
import routes from '@/routes'
import msToMm from '@/filters/ms-to-mm'
Vue.use(EventBus)
Vue.use(VueRouter)
Vue.use(msToMm)

const router = new VueRouter({routes, mode: 'history'})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
