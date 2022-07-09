// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// import Features from '../views/Features'

const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Works.vue')
  },
  {
    path: '/features',
    name: 'Features',
    // component: Features
    component: () => import(/* webpackChunkName: "about" */ '../views/Features.vue')
  },
  {
    path: '/ourteam',
    name: 'Our Team',
    // component: Features
    component: () => import(/* webpackChunkName: "about" */ '../views/Our-team.vue')
  },
  // {
  //   path: '/blog',
  //   name: 'Blog',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/blog/List.vue')
  // }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
