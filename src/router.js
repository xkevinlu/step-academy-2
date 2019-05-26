import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/waltz',
      name: 'waltz',
      component: () => import('./views/waltz.vue'),
      children: [
        {
          path: '/waltz/:figure',
          name: 'waltz-figures',
          component: () => import(`./components/Player.vue`)
        },
      ]
    },
    {
      path: '/tango',
      name: 'tango',
      component: () => import('./views/tango.vue'),
      children: [
        {
          path: '/tango/:figure',
          name: 'tango-figures',
          component: () => import('./components/Player.vue')
        },
      ]
    },
    {
      path: '/vwaltz',
      name: 'vwaltz',
      component: () => import('./views/vwaltz.vue'),
      children: [
        {
          path: '/vwaltz/:figure',
          name: 'vwaltz-figures',
          component: () => import('./components/Player.vue')
        },
      ]
    },
    {
      path: '/foxtrot',
      name: 'foxtrot',
      component: () => import('./views/foxtrot.vue'),
      children: [
        {
          path: '/foxtrot/:figure',
          name: 'foxtrot-figures',
          component: () => import('./components/Player.vue')
        },
      ]
    },
    {
      path: '/quickstep',
      name: 'quickstep',
      component: () => import('./views/quickstep.vue'),
      children: [
        {
          path: '/quickstep/:figure',
          name: 'quickstep-figures',
          component: () => import('./components/Player.vue')
        },
      ]
    },

  ]
})
