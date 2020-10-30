import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import MainPage from '../views/MainPage.vue'
import ListItem from '../components/ListItem.vue'
import ListItemHot from '../components/ListItemHot.vue'
import SignUp from '../views/SignUp.vue'
import Editor from '../views/Editor.vue'
import DetailsArticles from '../views/DetailsArticle.vue'
import DetailsQuestions from '../views/DetailsQuestion.vue'

Vue.use(VueRouter)
// router文件夹-->index.js文件
// cv以下代码解决路由地址重复的报错问题(一劳永逸)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [{
        path: '/',
        redirect: '/home',
        component: MainPage,
        children: [{
          path: '/home',
          name: 'home',
          component: ListItem
        },
        {
          path: '/hot',
          name: 'hot',
          component: ListItemHot
        }]
      }]
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/editor/:articleId',
      name: 'editor',
      component: Editor
    },
    {
      path: '/article/:id',
      name: 'detailsArticles',
      component: DetailsArticles
    },
    {
      path: '/question/:id',
      name: 'detailsQuestions',
      component: DetailsQuestions
    }
  ]
})
