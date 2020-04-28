import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import PublishPage from '@/components/PublishPage'
import OrderPage from '@/components/OrderPage'
import MyPage from '@/components/MyPage'
import TabBar from '@/components/TabBar'
import SearchTxt from '@/components/SearchTxt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/publishPage',
      name: 'PublishPage',
      component: PublishPage
    },
    {
      path: '/orderPage',
      name: 'OrderPage',
      component: OrderPage
    },
    {
      path: '/myPage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/tabBar',
      name: 'TabBar',
      component: TabBar
    },
    {
      path: '/searchTxt',
      name: 'SearchTxt',
      component: SearchTxt
    }
  ]
})
