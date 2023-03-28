import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManagePlayers from '../views/ManagePlayers.vue'
import CreateTeam from '../views/CreateTeam.vue'
import ManageCoaches from '../views/ManageCoaches.vue'
import AssignPoints from '../views/AssignPoints.vue'
import ManagePoints from '../views/ManagePoints.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/manage-players',
    name: 'ManagePlayers',
    component: ManagePlayers
  },
  {
    path: '/create-team',
    name: 'CreateTeam',
    component: CreateTeam
  },
  {
    path: '/manage-coaches',
    name: 'ManageCoaches',
    component: ManageCoaches
  },
  {
    path: '/assign-points',
    name: 'AssignPoints',
    component: AssignPoints
  },
  {
    path: '/manage-points',
    name: 'ManagePoints',
    component: ManagePoints
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
