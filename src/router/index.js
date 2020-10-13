import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Main from '../views/Main.vue'
import ListItem from '../components/ListItem.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [{
      path: '',
      component: Main,
      children: [{
        path: '',
        name: Home,
        compnents: ListItem
      }]
    }]
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
