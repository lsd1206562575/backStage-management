import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Manage.vue'),
    redirect:"/home",
    children: [
        {path: 'home', name: 'Home', component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),},
        {path: 'user', name: 'User', component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),},
        {path: 'role', name: 'Role', component: () => import(/* webpackChunkName: "about" */ '../views/Role.vue'),},
        {path: 'menu', name: 'Menu', component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue'),},
        {path: 'person', name: 'Person', component: () => import(/* webpackChunkName: "about" */ '../views/Person.vue'),},
        {path: 'file', name: 'File', component: () => import(/* webpackChunkName: "about" */ '../views/File.vue'),},
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
