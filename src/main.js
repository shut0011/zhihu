import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'default-passive-events'
import './plugins/element.js'
import './assets/styles/main.scss'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import CommentList from '@/components/CommentList.vue'

Vue.component('CommentList', CommentList)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
