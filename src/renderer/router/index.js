import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app-main-page',
      component: require('@/components/AppMain').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
